// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Postagem } from '../model/Postagem';
// import { AlertasService } from '../service/alertas.service';
// import { CarrinhoService } from '../service/carrinho.service';

// @Component({
//   selector: 'app-carrinho',
//   templateUrl: './carrinho.component.html',
//   styleUrls: ['./carrinho.component.css']
// })
// export class CarrinhoComponent implements OnInit {

//   listaPostagens: Postagem[]
//   idPostagem: number

//   subTotal: number = 0
//   frete: number = 20
//   total: number = 0
//   finalizarCompra: boolean = false

//   public payPalConfig: IPayPalConfig

//   constructor(
//     private carrinhoService: CarrinhoService,
//     private router: Router,
//     private alerta: AlertasService
//   ) { }

//   ngOnInit(): void {
//     const token = localStorage.getItem('token');
//     window.scroll(0, 0);

//     if (token === null) {
//       this.router.navigate(['/logar']);
//       this.alerta.showAlertDanger('Você precisar estar logado para entrar nessa página!');
//     }
//     this.initConfig();
//     window.scroll(0, 0);
//     this.listaPostagens = this.carrinhoService.listar();
//     this.updateValor();

//   }

//   carrinhoVazio() {
//     if (this.listaPostagens.length > 0) {
//       return false;
//     }
//     return true;
//   }

//   updateValor() {
//     this.subTotal = 0;
//     this.listaPostagens.map(
//       (postagem) => (this.subTotal += postagem.preco * postagem.quantidade)
//     );
//     this.total = this.subTotal + this.frete;
//   }

//   addQuantidade(id: number) {
//     this.listaPostagens.forEach((curso) => {
//       if (postagem.idPostagem === id) {
//         if (postagem.quantidade + 1 <= postagem.estoquePostagem)
//         postagem.quantidade++;
//       }
//     });
//     this.updateValor();
//   }

//   removeQuantidade(id: number) {
//     this.listaPostagens.forEach((postagem) => {
//       if (postagem.idPostagem === id) {
//         if (postagem.quantidade > 1) {
//           postagem.quantidade--;
//         } else {
//           this.removeProduto(id);
//         }
//       }
//     });
//     this.updateValor();
//   }

//   limparCarrinho() {
//     this.listaPostagens = this.carrinhoService.limparCarrinho();
//     this.updateValor();
//   }

//   removeProduto(id: number) {
//     this.listaPostagens = this.carrinhoService.removeProduto(id);
//     this.updateValor();
//   }

//   compraFinalizada() {
//     this.finalizarCompra = false;
//     this.router.navigate(['/home']);
//     this.limparCarrinho();
//   }

//   compraIniciada() {
//     if (this.listaPostagens.length > 0) {
//       this.finalizarCompra = true;
//     }
//   }

//   private initConfig(): void {
//     this.payPalConfig = {
//       currency: 'EUR',
//       clientId: 'sb',
//       // createOrder: (data) =>
//       //   <ICreateOrderRequest>{
//       //     intent: 'CAPTURE',
//       //     purchase_units: [
//       //       {
//       //         amount: {
//       //           currency_code: 'EUR',
//       //           value: '9.99',
//       //           breakdown: {
//       //             item_total: {
//       //               currency_code: 'EUR',
//       //               value: '9.99',
//       //             },
//       //           },
//       //         },
//       //         items: [
//       //           {
//       //             name: 'Enterprise Subscription',
//       //             quantity: '1',
//       //             category: 'DIGITAL_GOODS',
//       //             unit_amount: {
//       //               currency_code: 'EUR',
//       //               value: '9.99',
//       //             },
//       //           },
//       //         ],
//       //       },
//       //     ],
//       //   },
//       advanced: {
//         commit: 'true',
//       },
//       style: {
//         label: 'paypal',
//         layout: 'vertical',
//       },
//       onApprove: (data, actions) => {
//         console.log(
//           'onApprove - transaction was approved, but not authorized',
//           data,
//           actions
//         );
//         actions.order.get().then((details) => {
//           console.log(
//             'onApprove - you can get full order details inside onApprove: ',
//             details
//           );
//         });
//       },
//       onClientAuthorization: (data) => {
//         console.log(
//           'onClientAuthorization - you should probably inform your server about completed transaction at this point',
//           data
//         );
//       },
//       onCancel: (data, actions) => {
//         console.log('OnCancel', data, actions);
//       },
//       onError: (err) => {
//         console.log('OnError', err);
//       },
//       onClick: (data, actions) => {
//         console.log('onClick', data, actions);
//       },
//     };
//   }


// }
