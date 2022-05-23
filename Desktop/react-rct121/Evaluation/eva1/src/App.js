import axios from "axios";
import React, { useEffect, useState } from "react";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('asc')
  useEffect(() => {
    console.log(sort)
    setData([]);
    axios({
      method:'get',
      url: `http://localhost:8080/candidates`,
      params:{
        _page:page,
        _limit: 5,
        _sort:"salary",
        _order:`${sort}`
      }
    }).then((res) => {
      setData(res.data);
      console.log(res.data)
    })
  }, [page, sort])

  console.log(page)
  return (
    <div className="App">
      <div>
        {data.length === 0?<div id="loading-container">...Loading</div>:""}
        {sort== 'asc'?<button onClick={() => setSort('desc')} id="SORT_BUTTON" title={`Sort by Ascending Salary`} >Sort by Descending Salary</button>:<button onClick={() => setSort('asc')} id="SORT_BUTTON" title={`Sort by Ascending Salary`} >Sort by Ascending Salary</button>}
        {page == 1?<button title="PREV" id="PREV" disabled="disabled">PREV</button>:<button title="PREV" onClick={() => setPage(page-1)} id="PREV">PREV</button>}
        <button onClick={() => setPage(page+1)}   id="NEXT" title="NEXT" >NEXT</button>
      </div>
      {data.map((item) => {
        return <CandidateCard id={item.id} data = {{avatar:item.avatar, company:item.company_name, salary:item.salary, name:item.name, title: item.title}}></CandidateCard>
      })}
    </div>
  );
}
