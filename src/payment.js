/* jshint esversion:6 */
import { stringify } from "javascript-stringify";

var Payment = function(options){
    Object.assign(this, options);
};

export default class PaymentBuilder {
  constructor(){
    this.currency = 978; // for euros
    this.description = "";
    this.data = "";
    this.transaction_type = 0;
    this.redirect_urls = {
        merchant_url: "",
        ok_url: "",
        cancel_url: ""
    };
  }
  setData(data){
      try {
        this.data = JSON.stringify(data)
      } catch(e) {
          this.data = stringify(data)
      }
      return this;
  }
  setTotal(total){
      this.total = parseInt(total * 100);
      return this;
  }
  setOrderId(id){
      function zfill(num, len) {return (Array(len).join("0") + num).slice(-len);}
      this.order_id = zfill(id,8);
      return this;
  }
  setDescription(description){
      this.description = description;
      return this;
  }
  setCurrency(currency){
      this.currency = currency;
      return this;
  }
  setUrlOK(url){
      this.redirect_urls.ok_url = url;
      return this;
  }
  setUrlCancel(url){
      this.redirect_urls.cancel_url = url;
      return this;
  }
  setUrlMerchant(url){
      this.redirect_urls.merchant_url = url;
      return this;
  }

  build(){
      if(this.total === undefined) throw new Error("Total to charge not set");
      if(this.order_id === undefined) throw new Error("You should set an order id");

      if( this.redirect_urls.callback_url === "" ||
          this.redirect_urls.cancel_url === "" ||
          this.redirect_urls.return_url === ""){
          throw new Error("Urls to return from Redsys shoud be setted properly");
        }
      return new Payment(this);
  }
}
