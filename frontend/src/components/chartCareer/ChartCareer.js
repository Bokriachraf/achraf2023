import React from 'react';
import "./chartCareer.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2011',
    javascript: 1,
    mongodb:0,
    nodejs:0,
    java: 1,
    php:2,
    Mysql:2,
  },{
    name: '2012',
    javascript: 3,
    mongodb:0,
    nodejs:0,
    java: 2,
    php:3,
    Mysql:5,
  },{
    name: '2013',
    javascript: 0,
    mongodb:0,
    nodejs:0,
    java: 1,
    php:2,
    Mysql:6,
  },{
    name: '2014',
    javascript: 1,
    mongodb:0,
    nodejs:0,
    java: 0,
    php:1,
    Mysql:4,
  },{
    name: '2015',
    javascript: 2,
    mongodb:0,
    nodejs:0,
    java: 1,
    php:0,
    Mysql:2,
    },
  {
    name: '2016',
    javascript: 4,
    mongodb:0,
    nodejs:0,
    java: 0,
    php:1,
    Mysql:1,
    
  },
  {
    name: '2017',
    javascript: 5,
    mongodb:0,
    nodejs:0,
    java: 0,
    php:0,
    Mysql:1,
    amt: 2290,
  },
  {
    name: '2018',
    javascript: 6,
    mongodb:2,
    nodejs:2,
    java: 0,
    php:0,
    Mysql:0,
  },
  {
    name: '2019',
    javascript: 6,
    mongodb:3,
    nodejs:3,
    java: 0,
    php:0,
    Mysql:0,
    amt: 2181,
  },
  {
    name: '2020',
    javascript: 8,
    mongodb:4,
    nodejs:4,
    java: 0,
    php:0,
    Mysql:1,
 },
  {
    name: ' 2021',
    javascript: 12,
    mongodb:8,
    nodejs:12,
    java: 0,
    php:0,
    Mysql:0,
 },
];

function ChartCareer() {
    return (
      <div className="chartCareer">
      <h3 className="chartTitle">Career Analytics</h3>
      <ResponsiveContainer width="100%" height={300} >
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right:10,
            left: -28,
            bottom: 5,
          }}          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Line type="monotone" dataKey="php" stroke="#0000FF" />
          <Line type="monotone" dataKey="mongodb" stroke="#FF00FF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="javascript" stroke="#00FF00" />
          <Line type="monotone" dataKey="nodejs" stroke="#FF0000" />
          <Line type="monotone" dataKey="java" stroke="black" />
          <Line type="monotone" dataKey="Mysql" stroke="#808000" />

        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }


  export default ChartCareer
