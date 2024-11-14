"use client";
import { useState, useEffect } from "react";
export default function CoinMarket() {
  const API_KEY = "fa6349b040fb1ab82be70d163bf31f91";
  const [data, setData] = useState<any>(null);


  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)

      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);

      });
  }, []);


  return (
    <div className="container">
      <h1>Fetch data</h1>

      <p><span>BTC : </span>  {data?.rates?.BTC}</p>
      <p><span>ADA : </span>  {data?.rates?.ADA}</p>
      <p><span>ABC : </span>  {data?.rates?.ABC}</p>
      <p><span>ACP : </span>  {data?.rates?.ACP}</p>
      <p><span>ACT : </span>  {data?.rates?.ACT}</p>
      <p><span>ADCN : </span>  {data?.rates?.ADCN}</p>
      <p><span>ADX : </span>  {data?.rates?.ADX}</p>
      <p><span>ADZ : </span>  {data?.rates?.ADZ}</p>
      <p><span>AE : </span>  {data?.rates?.AE}</p>
      <p><span>AGI : </span>  {data?.rates?.AGI}</p>
      <p><span>ADA : </span>  {data?.rates?.ADA}</p>

    </div>
  );
}

