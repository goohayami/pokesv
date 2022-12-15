<template>
  <h2>電気タイプの弱点</h2>
  <div class="about">
    <table border="1">
      <tr>
        <td>効果</td>
        <td>対象タイプ</td>
      </tr>
      <tr>
        <td>効果はばつぐん</td>
        <td>じめん</td>
      </tr>
      <tr>
        <td>効果はいまひとつ</td>
        <td>でんき/はがね/ひこう</td>
      </tr>
    </table>
  </div>
  <p>ooooo</p>
  <div>
    <div id="dis-container">
      <img class="discription" src="../pic/denki-jimen.png" alt="" />
      <p>ooooo</p>
    </div>
    <div id="dis-container">
      <img class="discription" src="../pic/denki-dragon.png" alt="" />
      <p>ooooo</p>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

#dis-container {
  margin-top: 1rem;
}

td {
  width: 160px;
}

.discription {
  width: 90%;
}
</style>
