export function Saludar() {
   //const saludar = "hola react"
   const Marcas = ['nike','adidas','rebook']
   const color = ['azul','blanco','rojo']
   const newArr = [...Marcas, ...color]
   const marcas =  newArr.map((m) =>  
    <li>
      {m}
    </li>
   ) 
   return(
     <ul>{marcas}</ul> 
    
   );
   
}