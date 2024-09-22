import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './StatisticsChart.scss';

const data = [
  { month: "Jan", avgGrade: 3.5, exams: 4 },
  { month: "Feb", avgGrade: 3.7, exams: 3.8 },
  { month: "Mar", avgGrade: 3.9, exams: 4.2 },
  { month: "Apr", avgGrade: 3.3, exams: 4.1 },
  { month: "May", avgGrade: 3.6, exams: 4 },
  { month: "Jun", avgGrade: 3.8, exams: 4.2 },
  { month: "Jul", avgGrade: 3.7, exams: 3.9 },
  { month: "Aug", avgGrade: 4, exams: 4.3 },
  { month: "Sep", avgGrade: 3.9, exams: 4.1 },
  { month: "Oct", avgGrade: 4.1, exams: 4.5 },
  { month: "Nov", avgGrade: 4.3, exams: 4.6 },
  { month: "Dec", avgGrade: 4.5, exams: 4.7 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Avg Grade: ${payload[0].value}`}</p>
        <p>{`Exams: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const StatisticsChart = () => {
  return (
    <div className="statistics-chart">
      <div className="header">
        <h3>Statistic</h3>
        <div className="nav-icons">
          <FaChevronLeft />
          <span>Aug 2021</span>
          <FaChevronRight />
        </div>
      </div>
      <div className="progress-container">
      <h4 className="progress-title">
        Progress score <span className="legend-dot blue-dot" /> Average grade{" "}
        <span className="legend-dot green-dot" /> Exams
      </h4>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 10 }} 
        >
          <XAxis
            dataKey="month"
            interval={0}  
            tickMargin={10} 
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} axisLine={false} tickLine={false}/>
          <Line
            type="monotone"
            dataKey="avgGrade"
            stroke="#4f8dff"
            strokeWidth={2}
            dot={{ fill: "#4f8dff", r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="exams"
            stroke="#3ccf98"
            strokeWidth={2}
            dot={{ fill: "#3ccf98", r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
