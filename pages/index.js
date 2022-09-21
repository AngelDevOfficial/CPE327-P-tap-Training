
import {  Container, Grid, GridItem } from "@chakra-ui/react"
import Searchbar from "../components/Searchbar"
import Navbar from "../components/Navbar"


export default function Home() {
  return (
    <Grid gap= {4}>
      <GridItem>
        <Navbar/>
      </GridItem>
      <GridItem>
      <Searchbar/>
      </GridItem>

    </Grid>
      
    
  )
