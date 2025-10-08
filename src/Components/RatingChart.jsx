import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";

const RatingChart = () => {
  const { apps, loading, error } = useApps();
  const { id } = useParams();
  const app = apps.find((ap) => ap.id === parseInt(id));
  if (loading) {
    return <p className="text-center text-gray-500 py-10">Loading chart...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10">Error loading data!</p>
    );
  }

  if (!app || !app.ratings) {
    return (
      <p className="text-center text-gray-500 py-10">
        🚫 No rating data available
      </p>
    );
  }
  const ratings = app.ratings;

  return (
    <div>
      <h1 className="font-bold text-2xl">Ratings</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed={true} />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={30}
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
