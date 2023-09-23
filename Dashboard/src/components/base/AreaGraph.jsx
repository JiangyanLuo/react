import {ResponsiveContainer, AreaChart, Tooltip, XAxis, YAxis, Area} from 'recharts';

function AreaGraph({data, totalValue, label, categoryToggle, columnsSpan}) {
    return (
        <section className={`flex flex-col w-full h-full rounded-2xl shadow-xl py-2 ${columnsSpan} bg-white`}>
            <div className='flex justify-around pt-6'>
                <div>
                    <h2 className='capitalize'>{totalValue}</h2>
                    <p className='font-thin text-xs capitalize'>{label}</p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className='flex items-center space-x-2'>
                        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/20002svg' className='w-2 h-2 fill-current text-fuchsia-800'>
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <p className='capitalize text-fuchsia-800 text-xs'>last year</p>
                    </div>
                    <div  className='flex items-center space-x-2'>
                        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='w-2 h-2 fill-current text-blue-900'>
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <p className='capitalize text-blue-900 text-xs'>this year</p>
                    </div>
                    <div>{categoryToggle}</div>
                </div>

                <ResponsiveContainer width="100%" height="75%">
                    <AreaChart data={data} margin={{top:10}}>
                         <defs>
                            <linearGradient id="colorLy" x1="0" y1="0" x2='0' y2="1">
                                <stop offset="5%" stopColor='#86198F' stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="#86198F" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorYtd" x1="0" y1="0" x2='0' y2="1">
                                <stop offset="5%" stopColor='#02155E' stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="#02155E" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="time" padding={{left:-20, right:-20}} interval={0} />
                        <YAxis hide={true} domain={["auto","auto"]} />
                        <Tooltip />
                        <Area name="LY" type="monotone" dataKey="ly" stroke="#86198F" fillOpacity={1} fill="url(#colorLy)" />
                        <Area name="YTD" type="monotone" dataKey="ytd" stroke="#02155E" fillOpacity={1} fill="url(#colorYtd)" />
                    </AreaChart>
                </ResponsiveContainer>

            </div>

        </section>
    );
}

export default AreaGraph;