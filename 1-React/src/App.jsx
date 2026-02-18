import Card from "./components/Card"
const App = () => {
 let arr = [
  { skill: "python", company: "Amazon", address: "LXM" },
  { skill: "html", company: "Facebook", address: "LBBC" },
  { skill: "java", company: "Google", address: "Delhi" },
  { skill: "javascript", company: "Microsoft", address: "Bangalore" },
  { skill: "c++", company: "Tesla", address: "Mumbai" },
  { skill: "react", company: "Netflix", address: "Hyderabad" },
  { skill: "node", company: "Uber", address: "Pune" },
  { skill: "sql", company: "Oracle", address: "Chennai" },
  { skill: "php", company: "Adobe", address: "Kolkata" },
  { skill: "css", company: "Spotify", address: "Jaipur" }
];
 return (
    <div className="container">

      {/* <Card skill="java" company="Facebook" address="KENDUGUDA BPT"/>
      <Card skill="python" company="Twitter" address="KENDUGUDA BPT"/>
      <Card skill="Rush" company="Instagram" address="KENDUGUDA BPT"/> */}
      {arr.map(function(e){
        return <Card skill={e.skill} company={e.company} address={e.address}/>
      })}
    </div>

  )
}

export default App