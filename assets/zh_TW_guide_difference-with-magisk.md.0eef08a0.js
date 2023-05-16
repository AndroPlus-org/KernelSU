import{_ as e,o as i,c as s,a as l}from"./app.8fe0bbdc.js";const u=JSON.parse('{"title":"KernelSU 模組與 Magisk 的差異","description":"","frontmatter":{},"headers":[{"level":2,"title":"相同之處","slug":"similarities","link":"#similarities","children":[]},{"level":2,"title":"不同之處","slug":"differences","link":"#differences","children":[]}],"relativePath":"zh_TW/guide/difference-with-magisk.md"}'),a={name:"zh_TW/guide/difference-with-magisk.md"},d=l('<h1 id="title" tabindex="-1">KernelSU 模組與 Magisk 的差異 <a class="header-anchor" href="#title" aria-hidden="true">#</a></h1><p>儘管 KernelSU 模組和 Magisk 模組之間有許多相似之處，但由於它們完全不同的實作機制，不可避免地存在一些差異；如果您想讓您的模組同時在 Magisk 和 KernelSU 上運作，那麼您必須瞭解這些差異。</p><h2 id="similarities" tabindex="-1">相同之處 <a class="header-anchor" href="#similarities" aria-hidden="true">#</a></h2><ul><li>模組檔案格式：都以 Zip 的格式組織模組，並且模組的格式幾乎相同</li><li>模組安裝目錄：都位於 <code>/data/adb/modules</code></li><li>Systemless：都支援透過模組的形式以 systemless 修改 /system</li><li><code>post-fs-data.sh</code>：執行時間和語義完全相同</li><li><code>service.sh</code>：執行時間和語義完全相同</li><li><code>system.prop</code>：完全相同</li><li><code>sepolicy.rule</code>：完全相同</li><li>BusyBox：指令碼在 BusyBox 中以「獨立模式」執行</li></ul><h2 id="differences" tabindex="-1">不同之處 <a class="header-anchor" href="#differences" aria-hidden="true">#</a></h2><p>在瞭解不同之處之前，您需要知道如何區分您的模組是在 KernelSU 還是 Magisk 中執行；在所有可以執行模組指令碼的位置 (<code>customize.sh</code>, <code>post-fs-data.sh</code>, <code>service.sh</code>)，您都可以使用環境變數 <code>KSU</code> 來區分，在 KernelSU 中，這個環境變數將被設定為 <code>true</code>。</p><p>以下是一些不同之處：</p><ol><li>KernelSU 的模組不支援在 Recovery 中安裝。</li><li>KernelSU 的模組沒有內建的 Zygisk 支援 (但您可以透過 <a href="https://github.com/Dr-TSNG/ZygiskOnKernelSU" target="_blank" rel="noreferrer">ZygiskOnKernelSU</a> 來使用 Zygisk 模組)。</li><li>KernelSU 模組取代或刪除檔案與 Magisk 完全不同。KernelSU 不支援 <code>.replace</code> 方法，相反，您需要透過 <code>mknod filename c 0 0</code> 建立相同名稱的資料夾以刪除對應檔案。</li><li>BusyBox 的目錄不同；KernelSU 內建的 BusyBox 在 <code>/data/adb/ksu/bin/busybox</code> 而 Magisk 在 <code>/data/adb/magisk/busybox</code>；<strong>注意此為 KernelSU 內部行為，未來可能會變更！</strong></li><li>KernelSU 不支援 <code>.replace</code> 檔案；但 KernelSU 支援 <code>REPLACE</code> 和 <code>REMOVE</code> 變數以移除或取代檔案 (資料夾)。</li></ol>',8),r=[d];function o(c,t,n,h,_,f){return i(),s("div",null,r)}const g=e(a,[["render",o]]);export{u as __pageData,g as default};
