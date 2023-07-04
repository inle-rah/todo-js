import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値の取得→変数の初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompList = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 追加する要素
    const addTarget = completeButton.parentNode;
    // 追加する中身
    const text = addTarget.firstElementChild.innerText;

    // div以下を削除
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button（戻る）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親タグを完了リストから削除
      const delTarget = backButton.parentNode;
      document.getElementById("comp-list").removeChild(delTarget);

      // divタグ生成
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompList(text);
    });

    // divタグに子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("comp-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompList(deleteButton.parentNode);
  });

  // divタグ内にliタグを設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
