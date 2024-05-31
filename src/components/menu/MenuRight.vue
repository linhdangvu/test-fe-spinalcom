<script>
export default {
  name: "MenuRight",
};
</script>

<template>
  <div id="menu-right">
    <div class="content">
      <label>Temporalité</label>
      <div class="menu-title">
        <i class="fa fa-chevron-down"></i>
        <span>Cette année</span>
      </div>
    </div>

    <div class="content" style="margin-left: -151px">
      <label>Espace</label>
      <div class="menu-title">
        <i class="fa fa-chevron-down"></i>
        <span>Tour Lexius</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu-right {
  display: flex;
}
#menu-right .content {
  background-color: var(--text-color);
  padding: 5px 10px;
  border-radius: 12px;
  border: solid 2px white;
  width: 300px;
}

#menu-right label,
#menu-right span {
  text-transform: uppercase;
  color: white;
  font-size: 12px;
}

#menu-right label {
  font-size: 8px;
  position: absolute;
  left: 20px;
}

.content {
  position: relative;
  text-align: left;
}

.content i {
  color: white;
  margin-right: 5px;
}

.content .menu-title {
  margin-top: 18px;
}
</style>
