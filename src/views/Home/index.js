import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import IndexAnimation from "../../components/indexAnimation";
import './index.less'
let i=0
let timer=null
let introductionTarget='There is a kind of call to eat together'
export default function Home() {
  useEffect(()=>{
    typing()
  },[])
  const [introduction,setIntroduction]=useState('')
  const typing=()=>{
    if(i<introductionTarget.length){
      setIntroduction(introductionTarget.slice(0,i++)+"_")
      timer=setTimeout(typing,100)
    }else{
      setIntroduction(introductionTarget)
    }
  }
  return (
    <div>
      <IndexAnimation/>
      <Header background='transparent'/>
      <div className="home">
        {introduction}
      </div>   
    </div>
  );
}
 