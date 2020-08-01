import "./styles.css";

import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getActors().then(users => {
  const element = document.getElementById('root');
  element.innerText = "";

  const nodes = [];

  for (let user of users) {
    const node = Utils.createCharacterRow(user);

    node.addEventListener('click', characterDetail);
    function characterDetail() {
      DataBusiness.getActor(user.char_id).then(user => {
        Utils.showCharacter(user);    
        getQuote();
      })
    }
    function getQuote() {
      console.log(user);
      DataBusiness.getQuote(user.name).then(user => {
        Utils.showQuote(user);
      })
    }
    nodes.push(node);

  }

  for (let node of nodes) {
    document.getElementById('root').append(node);
    
  }
})



