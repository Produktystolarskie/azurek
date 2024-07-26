<template>
    <div class="row q-pa-xl contact">
      <div class="links">
        <h4>Kontakt</h4>
        <h6>
          Telefon: 123 456 789 <q-space/>
          Email: arturjurek@gmail.com
        
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
  