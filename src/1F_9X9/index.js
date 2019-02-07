import React from 'react';
import './style.css';

const MultiplicationChart = () => {
    let a =[];
    let a2 , a3 ,a4, a5, a6, a7, a8, a9;
    for(let i=2;i<=9;i++){
        let x = i;
        for(let i=1;i<=9;i++){
            a.push(<p className="one">{x} X {i} = {x*i}</p>)
        }
        
    }
    a2=a.slice(0,9);
    a3=a.slice(9,18);
    a4=a.slice(18,27);
    a5=a.slice(27,36);
    a6=a.slice(36,45);
    a7=a.slice(45,54);
    a8=a.slice(54,63);
    a9=a.slice(63,72);

    return (
        <div className="wrap">
            <div className="content">
                <div className="title">
                    <div className="x-top">×</div>
                    <hr className="line-top"/>
                    <div className="x-top">×</div>
                    <h1 className="title-cn">九九乘法表</h1>
                    <h1 className="title-en">Multiplication Chart</h1>
                    <div className="x-btm">×</div>
                    <hr className="line-btm"/>
                    <div className="x-btm">×</div>
                </div>
                <div className="chart">
                    <h2 className="number">2</h2>
                    {a2}
                </div>
                <div className="chart">
                <h2 className="number">3</h2>
                    {a3}
                </div>
                <div className="chart">
                    <h2 className="number">4</h2>
                    {a4}
                </div>
                <div className="chart">
                    <h2 className="number">5</h2>
                    {a5}
                </div>
                <div className="chart">
                    <h2 className="number">6</h2>
                    {a6}
                </div>
                <div className="chart">
                    <h2 className="number">7</h2>
                    {a7}
                </div>
                <div className="chart">
                    <h2 className="number">8</h2>
                    {a8}
                </div>
                <div className="chart">
                    <h2 className="number">9</h2>
                        {a9}
                </div>
               
               
            </div>
            <div className="footer">Copyright © 2019 HexSchool. All rights reserved.</div>
        </div>
    );
};
export { MultiplicationChart};