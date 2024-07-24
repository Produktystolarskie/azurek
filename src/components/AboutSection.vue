<template>
  <div class="row q-pa-xl about recommended">
    <div class="links">
      <h4>O mnie</h4>
      <h6>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        deserunt eligendi enim minima explicabo
      </h6>
    </div>
  </div>
</template>

<style>
.about {
  background-color: var(--accent);
  color: var(--primary);
  max-width: none;

  h6 {
    font-weight: 500;
  }
}


@media screen and (min-width: 1025px) {
  .about{
    max-width:1024px;
    border-radius: 20px 20px 0 0;

    h2 { 
      font-size:3.75rem
    }
  }
}
</style>
