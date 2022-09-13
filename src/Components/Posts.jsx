import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Button, Flex } from "@chakra-ui/react";
import PageComponent from "./Pagination";

export default function Posts({search}) {

  const [postData, setPostData] = useState();
  const [page,setPage]=useState(1);

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(()=>{

    // {>>>>----IT WON'T SEARCH UNITIL 3 CHARACTERS ARE ENTERED---<<<<<<}

    if(search.length>=3){
      axios({
        method:"GET",
        url :`https://jsonplaceholder.typicode.com/posts`,
        params:{
          title_like:search,
          _page: page,
        _limit: 24,

        }
      })
      .then((response)=>setPostData(response.data))
      .catch((error)=>{
        console.log(error);
      })
    }
  },[search])


  useEffect(()=>{
      axios({
        method:"GET",
        url :`https://jsonplaceholder.typicode.com/posts`,
        params:{
        title_like:search,
        _page: page,
        _limit: 12,

        }
      })
      .then((response)=>setPostData(response.data))
      .catch((error)=>{
        console.log(error);
      })
  },[page])

  


  //{>>>>----API call to show all posts during mounting---<<<<}

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPostData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {postData?.map((el) => {
          return <Cards key={el.id} {...el} />;
        })}
      </Flex>

      {/* /////>>>>>      PAGINATION PART      <<<<<<<<////// */}

      <center>
          <Button colorScheme='teal' variant='outline' m={2} disabled={page===1} onClick={()=>setPage(page-1)}>PREV</Button >
          <Button colorScheme='teal' variant='outline' m={2}  onClick={()=>setPage(page+1)}>NEXT</Button >
          <PageComponent id={page} LastPage={9} OnPageChange={setPage}/> 
        </center>
   </>
  );
}