import { Button } from '@chakra-ui/react';
import React from 'react'

{/* /////>>>>>     PAGINATION BUTTONS COMPONENT PART      <<<<<<<<////// */}

const PageComponent =({id,LastPage,OnPageChange})=>{
    const arr = new Array(LastPage).fill(0) ;
    return (
        <div key={id}>
          {
          arr.map((item,page)=> 
          <Button colorScheme='teal' variant='ghost' m={2} onClick={()=>OnPageChange(page+1)}>{page+1}</Button>
          )}
        </div>
  )}

export default PageComponent;