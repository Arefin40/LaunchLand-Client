import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import DashboardTitle from "@containers/DashboardTitle";
import { useAdminAnalytics } from "@hooks/useAnalytics";

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
   const RADIAN = Math.PI / 180;
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text
         x={x}
         y={y}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
      >
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

const Dashboard = () => {
   const analytics = useAdminAnalytics();
   if (analytics.isLoading) return;

   const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

   const data = [
      { name: "Total Products", value: analytics?.data?.totalProducts },
      { name: "Total Users", value: analytics?.data?.totalUsers },
      { name: "Total Reviews", value: analytics?.data?.totalReviews },
   ];

   return (
      <section className="space-y-10 h-full">
         <DashboardTitle title="Dashboard" />

         <main className="px-5 py-10 border w-full">
            <ResponsiveContainer width="100%" height="100%" className="min-h-[36rem]">
               <PieChart>
                  <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     label={renderCustomizedLabel}
                     fill="#8884d8"
                     dataKey="value"
                  >
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
                  <Tooltip />
               </PieChart>
            </ResponsiveContainer>

            <div className="grid sm:flex justify-center gap-x-8 gap-y-4">
               <div className="inline-flex gap-x-4 items-center">
                  <div className="w-5 h-5 shrink-0 rounded bg-[#0088FE]" />
                  <h3 className="text-gray-800">Total Products</h3>
               </div>
               <div className="inline-flex gap-x-4 items-center">
                  <div className="w-5 h-5 shrink-0 rounded bg-[#00C49F]" />
                  <h3 className="text-gray-800">Total Users</h3>
               </div>
               <div className="inline-flex gap-x-4 items-center">
                  <div className="w-5 h-5 shrink-0 rounded bg-[#FFBB28]" />
                  <h3 className="text-gray-800">Total Reviews</h3>
               </div>
            </div>
         </main>
      </section>
   );
};
export default Dashboard;
