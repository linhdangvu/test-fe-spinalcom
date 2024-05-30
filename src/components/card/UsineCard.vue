<template>
  <div id="card">
    <h1>Usine</h1>
    <p class="description">dfdsf</p>
    <p class="footer"><span>DynamicId: </span><span>12323</span></p>
  </div>
</template>

<style scoped>
#card {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  text-align: left;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0;
}

.description {
  color: var(--gray-300);
  font-style: italic;
  font-weight: 900;
  font-size: 15px;
  text-transform: uppercase;
  margin: 0px;
}

.footer {
  font-size: 10px;
  margin-bottom: 0;
  margin-top: 30px;
}

.footer span:first-child {
  color: var(--yellow-100);
  text-transform: uppercase;
  font-weight: 900;
}

.footer span:nth-child(2) {
  font-weight: 700;
}
</style>
