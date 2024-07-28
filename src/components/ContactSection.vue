<template>
    <div class="row q-pa-xl contact">
      <div>
        <h4>Kontakt</h4>
        <h6>
          W celu zakupienia poza olx, allegro nalezy sie kontaktowac na: <q-space/>
          Telefon: 787 607 511 <q-space/>
          Email: arturjurek12@gmail.com 
        </h6>
      </div>
    </div>
  </template>
  
  <style>
  .contact {
    background-color: var(--secondary);
    color: var(--primary);
    max-width: none;
    margin:0 auto;
  
    h6 {
      font-weight: 500;
      user-select: text;
    }
  }
  
  
  @media screen and (min-width: 1025px) {
    .contact{
      max-width:1024px;
      border-radius: 0 0 20px 20px;
  
      h2 { 
        font-size:3.75rem
      }
    }
  }
  </style>
  