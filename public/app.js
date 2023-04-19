fetch("trophies.json")
  .then((response) => response.json())
  .then((trophyData) => {
    // 获取HTML页面上的容器元素
    const trophyContainer = document.querySelector("#trophy-container");

    // 循环遍历所有的奖杯数据，创建HTML元素并渲染到页面上
    trophyData.trophyTitles.forEach((trophy) => {
      // 创建一个标题元素，并将游戏名称添加为文本内容
      const title = document.createElement("h2");
      title.textContent = trophy.trophyTitleName;
      trophyContainer.appendChild(title);

      // 创建一个图像元素，并将奖杯标题图标URL设置为图像源
      const icon = document.createElement("img");
      icon.src = trophy.trophyTitleIconUrl;
      trophyContainer.appendChild(icon);

      // 创建一个描述性文本元素，并将已获得的奖杯数量添加为文本内容
      const earnedTrophiesText = document.createElement("p");
      earnedTrophiesText.textContent = `已获得的奖杯：${trophy.earnedTrophies.bronze} 个铜奖杯，${trophy.earnedTrophies.silver} 个银奖杯，${trophy.earnedTrophies.gold} 个金奖杯，${trophy.earnedTrophies.platinum} 个白金奖杯。`;
      trophyContainer.appendChild(earnedTrophiesText);

      // 创建一个描述性文本元素，并将已完成的奖杯数量添加为文本内容
      const progressText = document.createElement("p");
      progressText.textContent = `已完成 ${trophy.progress}% 的奖杯进度。`;
      trophyContainer.appendChild(progressText);
    });
  })
  .catch((error) => console.error(error));
