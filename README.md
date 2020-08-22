---
tags: JavaScript 實戰班
---

# 第七週 Vue Router、第八週 最終挑戰

- 後台DEMO :[https://rockalen.github.io/js-training-week7/dist/#/login](https://rockalen.github.io/js-training-week7/dist/#/login)
- 前台DEMO :[https://rockalen.github.io/js-training-week7/dist/#/](https://rockalen.github.io/js-training-week7/dist/#/)

### Router 運用方法

#### 前台頁面
- 首頁 /index
- 手做理念 /about
- 慢慢手做 /products
    - 單一產品頁面 /product
- 購物車 /carts
- 購物成功 /orders

#### 後台管理頁面
- 登入頁面 /login
- 產品管理頁面/admin/products
    - 新增、修改商品(component>ProductModal.vue)
    - 刪除商品(component>DelProductModal.vue)
    - 分頁(component>Pagination.vue)
- 訂單列表/admin/orders    
- 優惠券列表/admin/coupons
- 圖庫列表/admin/imgCloud
- 模擬訂單/admin/customerOrders


#### 專案依賴
1. axios component (import axios from 'axios') - 非同步遠端API存取資料
2. VueAxios component (import VueAxios from 'vue-axios') - 非同步遠端API存取資料
3. vue-loading-overlay component(import Loading from 'vue-loading-overlay') - Loading 頁面視覺效果
4. FontAwesomeIcon component (import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap') - FontAwesome Icon
5. bootstrap (@import '~bootstrap/scss/bootstrap')
6. jQuery component (import jQuery from 'jquery')

## 以下為製作筆記

---
tags: JavaScript 實戰班
---

## 利用C.R.A.P. 設計準則四個準則，將左邊的表單改為右邊的表單
![](https://i.imgur.com/FATQhCi.png)
### 舉例
#### 對比（Contrast）
- 字的大小、粗體
#### 重複（Repetition）
- 使用長相類似的元件
#### 對齊（Alignment）
- 標籤對齊
#### 相近（Proximity）
- 區分相近區塊: 個人資訊、付款資訊、確認送出區塊(位置) 

## 如何挑選好主題
#### 選擇素材好取得的
> 避免使用到未經授權的圖片或是根本找不到圖片素材的問題
> 素材如果統一會更好(拍攝手法，顏色、角度、大小構圖等)
#### 避開已經既有的東西
> 容易被比較，有難以超越的限制
#### 挑選有興趣的主題
> 文案撰寫上會比較順暢

## 其他想記錄的技巧
### 雙色選擇技巧
- 標準色: 所有素材都以這個為主
- 強調色: 比較重要的才使用，要能夠跳脫出標準色的感覺
- 可以用一深一淺來搭配

### 顏色要到達的對比度
- 盡可能達到AA級(不至於網頁看起來不夠清楚)
#### 可使用chrome檢視
![](https://i.imgur.com/PezTXeq.png)

### 圖片素材如何跟背景搭配
- 著重在對比上，例如圖片視覺是繁複的內容，那背景就可以盡量單純

### 字型
[Google Fonts](https://fonts.google.com/)

## 免費資源整理
- https://www.notion.so/a4046e5d69134299bf221bae1056ae44
- https://www.pexels.com/zh-tw
- https://cc0.wfublog.com/
- https://pixabay.com/
- https://unsplash.com/
- https://stocksnap.io/
- https://www.photock.jp/