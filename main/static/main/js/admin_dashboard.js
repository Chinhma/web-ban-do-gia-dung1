document.addEventListener("DOMContentLoaded", function () {
  const api = "/dashboard/data/";

  function fmtV(n) {
    return n.toLocaleString("vi-VN") + " đ";
  }

  fetch(api)
    .then((r) => r.json())
    .then((data) => {
      document.getElementById("totalRevenue").textContent = fmtV(
        data.total_revenue || 0,
      );
      document.getElementById("totalOrders").textContent =
        data.total_orders || 0;
      document.getElementById("productsCount").textContent =
        data.products_count || 0;
      document.getElementById("customersCount").textContent =
        data.customers_count || 0;

      // revenue chart
      const ctx = document.getElementById("revenueChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.months || [],
          datasets: [
            {
              label: "Doanh thu",
              data: data.revenues || [],
              backgroundColor: "rgba(13,110,253,0.08)",
              borderColor: "rgba(13,110,253,1)",
              fill: true,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
        },
      });

      // category chart (placeholder: use top products as pie)
      const catCtx = document.getElementById("categoryChart").getContext("2d");
      const names = (data.top_products || []).map((x) => x.name);
      const solds = (data.top_products || []).map((x) => x.sold);
      new Chart(catCtx, {
        type: "pie",
        data: {
          labels: names,
          datasets: [
            {
              data: solds,
              backgroundColor: [
                "#4e79a7",
                "#f28e2b",
                "#e15759",
                "#76b7b2",
                "#59a14f",
              ],
            },
          ],
        },
        options: { responsive: true },
      });

      // top products list
      const topEl = document.getElementById("topProducts");
      (data.top_products || []).forEach((t, idx) => {
        const li = document.createElement("li");
        li.style.padding = "8px 0";
        li.innerHTML = `<strong>${idx + 1}. ${t.name}</strong> <div style="color:#666">Đã bán: ${t.sold}</div>`;
        topEl.appendChild(li);
      });

      // low stock
      const lowEl = document.getElementById("lowStock");
      (data.low_stock || []).forEach((p) => {
        const li = document.createElement("li");
        li.style.padding = "8px 0";
        li.innerHTML = `<strong>${p.name}</strong> <div style="color:#e74c3c">Tồn: ${p.stock}</div>`;
        lowEl.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Dashboard data fetch error", err);
    });
});
