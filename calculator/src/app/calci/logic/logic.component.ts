import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text='';
  currentEle = '0';
  waitForSecondEle = false;
  operand1 =0;
  operator = '';
  currentOp = null;
  ans=''
  

  public numk(v:string){
    console.log(v)
    if(this.waitForSecondEle){
      this.currentEle =v;
      this.waitForSecondEle = false;
    }
    else{
      this.currentEle==='0' ? this.currentEle =v : this.currentEle+=v;
    }
    
    
  }

  decimal(){
    if(this.currentEle.includes('.')){
        this.currentEle += '.'; 
    }
  }


  Calculation(op:string,operand2: number){
    switch(op){
      case '+' :
         return (this.operand1)+=(operand2);
      case '-': 
         return this.operand1-=operand2;
      case '*': 
         return this.operand1*=operand2;
      case '/': 
         return this.operand1/=operand2;
      case '=':
         return operand2;
    }
  }



  public opk(op:string){
    console.log(op)
    if(this.operand1 === 0){
      this.operand1 = Number(this.currentEle);
    }
    else if(this.operator){
      const result = this.Calculation(this.operator , Number(this.currentEle))
      this.currentEle=String(result);
      this.operand1 = Number(this.currentEle);
      this.ans = String(result);
    }
    this.operator = op;
    this.waitForSecondEle = true;
  }


  allClear(){
    this.currentEle = '0';
    this.waitForSecondEle = false;
    this.operand1 =0;
    this.operator = '';
    this.currentOp = null;
    this.ans=''
  }

}
