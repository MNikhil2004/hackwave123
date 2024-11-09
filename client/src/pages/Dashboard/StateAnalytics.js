// src/pages/Dashboard/StateAnalytics.js
import React, { useEffect } from 'react';
import '../../styles/Analytics.css';  

const StateAnalytics = ({ selectedState }) => {
    useEffect(() => {
        if (selectedState) {
            loadGoogleCharts();
        }
    }, [selectedState]);

    const loadGoogleCharts = () => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
            window.google.charts.load('current', { packages: ['corechart'] });
            window.google.charts.setOnLoadCallback(drawCharts);
        };
        document.body.appendChild(script);
    };

    const generateRandomSalesData = () => {
        const crops = ['Paddy', 'Wheat', 'Flour', 'Sugar Cane', 'Pineapple'];
        return crops.map(crop => [crop, Math.floor(Math.random() * 100) + 1]);
    };

    const generateMonthlySalesData = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September', 'October', 
            'November', 'December'
        ];
        const seed = selectedState.charCodeAt(0);
        return months.map(month => [month, Math.floor(Math.random() * (100 + seed)) + 1]);
    };

    const drawCharts = () => {
        const cropData = generateRandomSalesData();
        const monthlyData = generateMonthlySalesData();

        drawPieChart(cropData);
        drawBarChart(cropData);
        drawLineChart(cropData);
        drawMonthlyChart(monthlyData);
    };

    const drawPieChart = (cropData) => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ...cropData
        ]);
        const options = { title: `${selectedState} Crop Sales Distribution` };
        const chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    };

    const drawBarChart = (cropData) => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ...cropData
        ]);
        const options = {
            title: `${selectedState} Crop Sales Bar Chart`,
            hAxis: { title: 'Crops' },
            vAxis: { title: 'Sales' }
        };
        const chart = new window.google.visualization.BarChart(document.getElementById('barchart'));
        chart.draw(data, options);
    };

    const drawLineChart = (cropData) => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crops', 'Sales'],
            ...cropData
        ]);
        const options = {
            title: `${selectedState} Crop Sales Line Chart`,
            curveType: 'function',
            legend: { position: 'bottom' }
        };
        const chart = new window.google.visualization.LineChart(document.getElementById('linechart'));
        chart.draw(data, options);
    };

    const drawMonthlyChart = (monthlyData) => {
        const data = window.google.visualization.arrayToDataTable([
            ['Month', 'Sales'],
            ...monthlyData
        ]);
        const options = {
            title: `${selectedState} Monthly Sales`,
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' }
        };
        const chart = new window.google.visualization.ColumnChart(document.getElementById('monthlychart'));
        chart.draw(data, options);
    };

    if (!selectedState) return <p>Please select a state to view analytics.</p>;

    return (
        <div className="state-analytics">
            <h2>{selectedState} Crop Sales Analytics</h2>
            <div className="chart-grid">
                <div id="piechart" className="chart"></div>
                <div id="barchart" className="chart"></div>
                <div id="linechart" className="chart"></div>
                <div id="monthlychart" className="chart"></div> 
            </div>
        </div>
    );
};

export default StateAnalytics;