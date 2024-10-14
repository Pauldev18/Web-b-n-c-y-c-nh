let listData = [];
let itemEdit = null;
const tableRender = document.querySelector("#tableRender");

window.addEventListener("DOMContentLoaded", () => {
  loadData();
});

const loadData = () => {
  let txt = "";
  listData.forEach((x) => {
    txt += `
     <tr>
        <td>${x.productTypeId}n</td>
        <td>${x.name}</td>
        <td>
            <div class="form-button-action">
            <button
                class="btn btn-link btn-primary btn-lg"
                type="button"
                onclick="handleEdit('${x.productTypeId}')"
            >
                <i class="fa fa-edit"></i>
            </button>
            <button
                class="btn btn-link btn-danger"
                type="button"
                onclick="handleOpenConfirm('${x.productTypeId}')"
            >
                <i class="fa fa-times"></i>
            </button>
            </div>
        </td>
        </tr>
    `;
  });
  tableRender.innerHTML = txt;
};

// CREAT AND UPDATE
const handleFormEditSubmit = (e) => {
  e.preventDefault();

  try {
    let data = handleGet();
    if (itemEdit?.productTypeId) {
      listData = listData.map((item) => {
        if (item.productTypeId === itemEdit.productTypeId) {
          return { ...item, ...data };
        }
        return item;
      });
    } else {
      listData.push(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    handleClose();
  }
};

const handleOpen = () => {
  $("#exampleModalCenter").modal("show");
};

const handleClose = () => {
  $("#exampleModalCenter").modal("hide");
  loadData();
  itemEdit = null;
};

const handleSet = (id) => {
  let item = id
    ? listData.find((x) => x.productTypeId === id)
    : { productTypeId: "", name: "" };
  itemEdit = item;
  for (let key in item) {
    if (item.hasOwnProperty(key)) {
      let inputElement = document.getElementById(key);
      if (inputElement) {
        inputElement.value = item[key];
      }
    }
  }
};

const handleGet = () => {
  let userInfo = {};

  const fields = ["productTypeId", "name"];

  fields.forEach(function (field) {
    let inputElement = document.getElementById(field);
    if (inputElement) {
      userInfo[field] = inputElement.value;
    }
  });
  return userInfo;
};

const handleEdit = (id) => {
  handleSet(id);
  handleOpen();
};

const handleAdd = () => {
  handleSet(null);
  handleOpen();
};

// CONFIRM DIALOG
const handleOpenConfirm = (id) => {
  handleSet(id);
  $("#confirmModal").modal("show");
};

const handleCloseConfirm = () => {
  $("#confirmModal").modal("hide");
  loadData();
  itemEdit = null;
};

const handleFormConfirmSubmit = (e) => {
  e.preventDefault();
  try {
    const index = listData.findIndex(
      (x) => x.productTypeId === itemEdit?.productTypeId
    );

    if (index >= 0) {
      listData.splice(index, 1);
      handleCloseConfirm();
    }
  } catch (error) {
    console.error("Có lỗi xảy ra khi xóa sản phẩm:", error);
  }
};
