"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockExpenses = [
  { date: "2025-09-01", amount: 500 },
  { date: "2025-09-05", amount: 200 },
  { date: "2025-09-10", amount: 700 },
  { date: "2025-09-15", amount: 300 },
];

const ExpenseChart = () => {
  const data = {
    labels: mockExpenses.map((e) => e.date),
    datasets: [
      {
        label: "Expenses",
        data: mockExpenses.map((e) => e.amount),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Expenses Over Time",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ExpenseChart;
