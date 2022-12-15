<template>
  <h2>ノーマルタイプの弱点</h2>
  <div class="about">
    <table border="1">
      <tr>
        <td>効果</td>
        <td>対象タイプ</td>
      </tr>
      <tr>
        <td>効果はばつぐん</td>
        <td>かくとう</td>
      </tr>
      <tr>
        <td>効果はいまひとつ</td>
        <td>いわ/はがね</td>
      </tr>
    </table>
  </div>
  <p>ooooo</p>
  <div>
    <div id="dis-container">
      <img class="discription" src="../pic/normal-kakuto.png" alt="" />
      <p>ooooo</p>
    </div>
    <div id="dis-container">
      <img class="discription" src="../pic/normal-goast.png" alt="" />
      <p>ooooo</p>
    </div>
  </div>
</template>

<style scoped>
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
