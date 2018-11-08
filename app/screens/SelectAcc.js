// import React from "react";
// import { onSignIn } from "../auth";
// import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
// import { onSetPvt, list_acc, onSetusername, UserName } from "../auth";


// export default ({ navigation }) => (
//   <Container>
//         <Header />
//         <Content>
//           <List>
//             { list_acc.map(function(name, index){
//               return (
//                 <ListItem key={ index }>
//                   <Left>
//                     <Text onPress = {() => { 
//                       onSetusername(name);
                     
//                     }}>{name}</Text>
//                   </Left>
//                   <Right>
//                     <Icon name="arrow-forward" />
//                   </Right>
//                 </ListItem>
//               )
//             })}
//           </List>
//         </Content>
//       </Container>
// );


import React from "react";
import { List, ListItem } from 'react-native-elements'
import { list_acc,onSignIn,onSetusername } from "../auth";


export default ({ navigation }) => (
        <List>
          {
            list_acc.map((name, index) => (
              <ListItem key={ index } onPress={ () => { onSetusername(name);
                onSignIn().then(() => navigation.navigate("Constitution"));}}
                title={name}
              />
            ))
          }
        </List>
);
