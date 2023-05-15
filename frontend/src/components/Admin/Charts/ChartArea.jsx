import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import { areaChartData } from '../../../constants/Chart';

const ChartArea = () => {


    return (
        <AreaChart
            width={700}
            height={250}
            data={areaChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id='colorPv'>
                <stop offset="5%" stopColor="#09B66E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1DC441" stopOpacity={0} />
                </linearGradient>
            </defs>

            <XAxis dataKey={'name'} stroke="#fff" />
            <YAxis stroke="#ffff" />
            <Tooltip wrapperStyle={{ backgroundColor: '#ccc', color:"#D64F26", fontWeight:"bold" }} />
            <Area
                type="monotone"
                dataKey="amount"
                stroke="#14A84D"
                fillOpacity={1}
                fill="url(#colorPv)" />
        </AreaChart>
    )
}

export default ChartArea
