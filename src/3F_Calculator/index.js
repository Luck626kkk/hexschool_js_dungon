import React, { Component } from 'react';
import './style.css';


class Calculator extends Component{
    constructor(props){
      super(props);
      this.state={
        answerArray:["0"],
        calculationArray:[],
        partA: null, //String
        partB: null, //String
        answer: 0,
        symbol: 0, //  0 => null , 1 => + , 2 => - , 3 => X , 4 => 5 => =
        calculate: false,
        dot: false,
      };
    }
    
   
    render(){
        console.log(this.state.partA,this.state.partB,this.state.symbol,this.state.calculate)
        return (
            <div className="wrap">
                <div className="calculator">
                    <div className="header">
                        <div className="expression"></div>
                        <div className="result">{this.state.answerArray}</div>
                    </div>
                    <div className="body">
                        <div className="number " onClick={ () => this.numberClick(7)}>7</div>
                        <div className="number " onClick={ () => this.numberClick(8)}>8</div>
                        <div className="number " onClick={ () => this.numberClick(9)}>9</div>
                        <div className="operator " onClick={ this.division}>÷</div>
                        <div className="number " onClick={ () => this.numberClick(4)}>4</div>
                        <div className="number " onClick={ () => this.numberClick(5)}>5</div>
                        <div className="number " onClick={ () => this.numberClick(6)}>6</div>
                        <div className="operator " onClick={this.multiplication}>×</div>
                        <div className="number" onClick={ () => this.numberClick(1)}>1</div>
                        <div className="number" onClick={ () => this.numberClick(2)}>2</div>
                        <div className="number" onClick={ () => this.numberClick(3)}>3</div>
                        <div className="operator" onClick={this.addClick }>+</div>
                        <div className="number" onClick={ () => this.numberClick(0)}>0</div>
                        <div className="number">00</div>
                        <div className="number">.</div>
                        <div className="operator" onClick={this.subtractClick}>-</div>
                        <div className="all-clear" onClick={this.clear}>AC</div>
                        <div className="backspace" onClick={this.delete}>⌫</div>
                        <div className="equal"onClick={() => this.equalClick(5)}>=</div>
                    </div>
                </div>
            </div>
        )
    }
    

    //數字 click
    numberClick(n){
        
        if(this.state.calculate === false && this.state.dot === false){
            //判斷第一個數字是否為 0 如果為 0 直接更新為 click 的值, 如果不是就新增數值
            if(this.state.answerArray[0] === '0'){
                this.setState({answerArray:[n],});
            }else{
                //找出沒有逗號的陣列
                let clear = this.state.answerArray.filter((value) => {
                    return value !== ',';
                })
                //放入 click 的值
                clear.push(n);
                //加入逗號
                let comma = toThousands(clear.join(''));

                this.setState({
                    answerArray: comma,
                });


            }
        }else{
            this.setState({
                calculate: false,
                answerArray:[n],
            })
            
            

        }

    
    }

    // = 號 click
    equalClick = (Cal) =>{


        let calculation = () =>{
            //將 partA/B 從字串轉成數值
            let A = parseInt(this.state.partA);
            let B = parseInt(this.state.partB);
            let ans, ansString;
            let newArray = [];
            let comma;
            //判斷運算值
            switch(this.state.symbol) {
                
                case 1:
                    
                    ans = A + B; //要給 partA 做下次計算
                    ansString = ans.toString();
                    console.log(this.state.partA,this.state.partB,this.state.symbol,this.state.calculate)
                    //將算出的數字給到一個新的陣列
                    
                    for (let i = 0; i < ansString.length; i++) {
                        newArray.push(ansString.slice(i, i + 1));
                    }
                    comma = toThousands(newArray.join(''))
                  
                    this.setState({
                        answerArray: comma,
                        symbol: Cal,
                        partA: ans,
                        
                    });
                    break;

                case 2:
                    ans = A - B; //要給 partA 做下次計算
                    ansString = ans.toString();
                    
                    //將算出的數字給到一個新的陣列
                    
                    for (let i = 0; i < ansString.length; i++) {
                        newArray.push(ansString.slice(i, i + 1));
                    }
                    comma = toThousands(newArray.join(''))
                
                    this.setState({
                        answerArray: comma,
                        symbol: Cal,
                        partA: ans,
                        
                    });
                    break;
                case 3:
                    ans = A * B; //要給 partA 做下次計算
                    ansString = ans.toString();
                    
                    //將算出的數字給到一個新的陣列
                    
                    for (let i = 0; i < ansString.length; i++) {
                        newArray.push(ansString.slice(i, i + 1));
                    }
                    comma = toThousands(newArray.join(''))
                
                    this.setState({
                        answerArray: comma,
                        symbol: Cal,
                        partA: ans,
                        
                    });
                    break;
                case 4:
                    ans = A / B; //要給 partA 做下次計算
                    ansString = ans.toString();
                    
                    //將算出的數字給到一個新的陣列
                    
                    for (let i = 0; i < ansString.length; i++) {
                        newArray.push(ansString.slice(i, i + 1));
                    }
                    comma = toThousands(newArray.join(''))
                
                    this.setState({
                        answerArray: comma,
                        symbol: Cal,
                        partA: ans,
                        
                    });
                    break;

                default:
                    break;
            }
        }
            
                
            
        let clear = this.state.answerArray.filter((value) => {
            return value !== ',';
        })
    
        //將陣列轉換為字串 再將字串轉換為數值
        let toStr = clear.join('');
        let toInt = parseInt(toStr);
        

        this.setState({
            partB: toInt,

        },calculation)
            

        
    }

    

    //+ 號 click
    addClick = () =>{
       
        if(this.state.partA === null){
            
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
           
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
           
            this.setState({
                partA: toInt,
                calculate: true,
                symbol: 1,
            })
        }else if(this.state.partA !== null && this.state.partB === null){
            //將 answerArray 轉給 partB
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            

            this.setState({
                partB: toInt,
                calculate: true,
                symbol: 1,
                
            },()=>{
                this.equalClick(1)
            })
        }else if(this.state.symbol === 5){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:1,
                
            })
        }else if(this.state.partA !== null && this.state.partB !== null){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:1,
                
            },()=>{
                this.equalClick(1);

            })
          
        }
    }
    // - 號 click
    subtractClick = () =>{
        if(this.state.partA === null){
            
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
           
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
           
            this.setState({
                partA: toInt,
                calculate: true,
                symbol: 2,
            })
        }else if(this.state.partA !== null && this.state.partB === null){
            //將 answerArray 轉給 partB
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            

            this.setState({
                partB: toInt,
                calculate: true,
                symbol: 2,
                
            },()=>{
                this.equalClick(2)
            })
        }else if(this.state.symbol === 5){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:2,
                
            })
        }else if(this.state.partA !== null && this.state.partB !== null){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:2,
                
            },()=>{
                this.equalClick(2);

            })
          
        }
    }

    // * 號 click
    multiplication = ()=>{
        if(this.state.partA === null){
            
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
           
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
           
            this.setState({
                partA: toInt,
                calculate: true,
                symbol: 3,
            })
        }else if(this.state.partA !== null && this.state.partB === null){
            //將 answerArray 轉給 partB
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            

            this.setState({
                partB: toInt,
                calculate: true,
                symbol: 3,
                
            },()=>{
                this.equalClick(3)
            })
        }else if(this.state.symbol === 5){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:3,
                
            })
        }else if(this.state.partA !== null && this.state.partB !== null){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:3,
                
            },()=>{
                this.equalClick(3);

            })
          
        }
    
    }
    division = () => {
        if(this.state.partA === null){
            
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
           
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
           
            this.setState({
                partA: toInt,
                calculate: true,
                symbol: 4,
            })
        }else if(this.state.partA !== null && this.state.partB === null){
            //將 answerArray 轉給 partB
            //找出沒有逗號的陣列
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            

            this.setState({
                partB: toInt,
                calculate: true,
                symbol: 4,
                
            },()=>{
                this.equalClick(4)
            })
        }else if(this.state.symbol === 5){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:4,
                
            })
        }else if(this.state.partA !== null && this.state.partB !== null){
            let clear = this.state.answerArray.filter((value) => {
                return value !== ',';
            })
        
            //將陣列轉換為字串 再將字串轉換為數值
            let toStr = clear.join('');
            let toInt = parseInt(toStr);
            this.setState({
                partB: toInt,
                calculate: true,
                symbol:4,
                
            },()=>{
                this.equalClick(4);

            })
          
        }
    }
    clear = () =>{
        this.setState({
            answerArray:["0"],
            calculationArray:[],
            partA: null, //String
            partB: null, //String
            answer: 0,
            symbol: 0, //  0 => null , 1 => + , 2 => - , 3 => X , 4 => 5 => =
            calculate: false,
            dot: false,
        })
    }
    delete = () =>{
        let last = this.state.answerArray.length
        let del = this.state.answerArray.splice(last-1,1);
        this.setState({
            answerArray: del,
        })
    }
   
}

// 加入逗號
function toThousands(num){
    let result = [ ], counter = 0;
    num = (num || 0).split('');
    for (let i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
return result;
}

export {Calculator};
