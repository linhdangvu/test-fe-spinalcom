<script>
export default {
  name: "MenuPage",
};
</script>

<template>
  <div id="menu">
    <button class="btn-menu"><i class="fa fa-bars"></i></button>
    <div class="menu-image"><img src="../../assets/spinalcom_logo.svg" /></div>
    <div class="menu-air">
      <label>Application</label>
      <i class="fa fa-cloud"></i>
      <span>Qualité de l'air</span>
    </div>
  </div>
</template>

<style scoped>
#menu {
  background-color: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  display: flex;
}

.btn-menu {
  background-color: white;
  color: var(--gray-100);
  border: solid 1px var(--gray-100);
  font-size: 20px;
  width: 40px;
  border-radius: 5px;
}

.menu-image {
  display: grid;
  align-items: center;
}

.menu-image img {
  width: 100px;
  margin: 0 10px;
}

.menu-air {
  position: relative;
  padding: 10px 6px 6px 6px;
  border: solid 1px var(--gray-100);
  width: 200px;
  text-align: left;
}

.menu-air label {
  position: absolute;
  top: -8px;
  left: 21px;
  font-size: 10px;
  background-color: white;
  padding: 0 3px;
  text-transform: uppercase;
}

.menu-air i {
  margin-right: 7px;
}
</style>
