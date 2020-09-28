import * as React from 'react';
import styles from './Helix.module.scss';
import { IHelixProps } from './IHelixProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios';

export default class Helix extends React.Component<IHelixProps, any> {
  componentDidMount(){
    
    var items :any = [];
    var apiPath = "/sites/devdhi/_api/web/lists/getByTitle('"+this.props.listName+"')/items";
    axios.get(apiPath).then(result => {
      for (var i = 0; i < result.data.value.length; i++) {
        items.push({
          title: String(result.data.value[i]["Title"]),
          Url:  (result.data.value[i]["URL"]) ,
          Category:String(result.data.value[i]["Category"])
        });
      }
      this.setState({ listItems: items });
    })
  }
  constructor(p:any,s:any){
    super(p);
    this.state={
      listItems:[]
    }
  }
  public render(): React.ReactElement<IHelixProps> {
  
    return (
      
       
      <div className="container-fluid">
{console.log(this.state.listItems)}
        
        <div className="row">
          <div className="position1">
            <img className="iconStyle" src={require("./images/image1.png")} />
            <div className="helixBox">
              <p>GEARS</p>
              <p>Geographic Essential</p>
              <p>Access Requirements</p>
              <p>&nbsp;</p>
              <p><a href="#">Link1</a></p>
              <p><a href="#">Link2</a></p>
              <p><a href="#">Link3</a></p>
              {this.state.listItems.filter(x=>x.Category===("GEARS")).map(x=>{x.Url!=null?<p><a href={x.Url.Url}>{x.title}</a></p>:<p>{x.title}</p>})}
             {console.log(1,this.state.listItems)}
            </div>
          </div>
          <div className="position2">
            <img className="iconStyle" src={require("./images/image2.png")} />
            <div className="helixBox">
              <p>ARC</p>
              <p>Access Review</p>
              <p>Committee</p>
              {this.state.listItems.filter(x=>x.Category===("ARC")).map(x=>{x.Url!=null?<p><a href={x.Url.Url}>{x.title}</a></p>:<p>{x.title}</p>})}
           
            </div>
          </div>
          <div className="position3">
            <img className="iconStyle"src={require("./images/image3.png")} />
            <div className="helixBox">
              <p>GAT</p>
              <p>Global Access Team </p>
              <p>&nbsp;</p>
              <p><a href="#">Link1</a></p>
              <p><a href="#">Link2</a></p>
              <p><a href="#">Link3</a></p>
              {this.state.listItems.filter(x=>x.Category===("GAT")).map(x=>{x.Url!=null?<p><a href={x.Url.Url}>{x.title}</a></p>:<p>{x.title}</p>})}
           
            </div>
          </div>
          <div className="position4">
            <img className="iconStyle" src={require("./images/image4.png")} />
            <div className="helixBox">
              <p>ATOM</p>
              <p>Acces Trade-Off</p>
              <p>Matrix</p>
              {this.state.listItems.filter(x=>x.Category===("ATOM")).map(x=>{x.Url!=null?<p><a href={x.Url.Url}>{x.title}</a></p>:<p>{x.title}</p>})}
           
            </div>
          </div>
          <div className="position5">
            <img className="iconStyle" src={require("./images/image5.png")} />
            <div className="helixBox">
              <p>CPI</p>
              <p>Commercial Payer</p>
              <p>Analytics</p>
              {this.state.listItems.filter(x=>x.Category===("CPI")).map(x=>{x.Url!=null?<p><a href={x.Url.Url}>{x.title}</a></p>:<p>{x.title}</p>})}
           
            </div>
          </div>
        </div>
        <div className="row">
          <img className="imageStyle" src={require("./images/Helix.png")} />
        </div>
      </div>
  
  );
  }
}
