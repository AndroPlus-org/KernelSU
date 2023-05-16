import{_ as s,o as e,c as l,a}from"./app.8fe0bbdc.js";const y=JSON.parse('{"title":"How to build KernelSU?","description":"","frontmatter":{},"headers":[{"level":2,"title":"Build Kernel","slug":"build-kernel","link":"#build-kernel","children":[{"level":3,"title":"Sync the kernel source code","slug":"sync-the-kernel-source-code","link":"#sync-the-kernel-source-code","children":[]},{"level":3,"title":"Build","slug":"build","link":"#build","children":[]}]},{"level":2,"title":"Build Kernel with KernelSU","slug":"build-kernel-with-kernelsu","link":"#build-kernel-with-kernelsu","children":[]}],"relativePath":"guide/how-to-build.md"}'),n={name:"guide/how-to-build.md"},o=a(`<h1 id="how-to-build-kernelsu" tabindex="-1">How to build KernelSU? <a class="header-anchor" href="#how-to-build-kernelsu" aria-hidden="true">#</a></h1><p>First, you should read the Android Official docs for kernel build:</p><ol><li><a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">Building Kernels</a></li><li><a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">GKI Release Builds</a></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This page is for GKI devices, if you use an old kernel, please refer <a href="./how-to-integrate-for-non-gki.html">how to integrate KernelSU for old kernel</a></p></div><h2 id="build-kernel" tabindex="-1">Build Kernel <a class="header-anchor" href="#build-kernel" aria-hidden="true">#</a></h2><h3 id="sync-the-kernel-source-code" tabindex="-1">Sync the kernel source code <a class="header-anchor" href="#sync-the-kernel-source-code" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://android.googlesource.com/kernel/manifest</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">kernel_manifest.xm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.repo/manifests</span></span>
<span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manifest.xml</span></span>
<span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span></span>
<span class="line"></span></code></pre></div><p>The <code>&lt;kernel_manifest.xml&gt;</code> is a manifest file which can determine a build uniquely, you can use the manifest to do a re-preducable build. You should download the manifest file from <a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">Google GKI release builds</a></p><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h3><p>Please check the <a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">official docs</a> first.</p><p>For example, we need to build aarch64 kernel image:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">LTO</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">thin</span><span style="color:#A6ACCD;"> BUILD_CONFIG</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">common/build.config.gki.aarch64</span><span style="color:#A6ACCD;"> build/build.sh</span></span>
<span class="line"></span></code></pre></div><p>Don&#39;t forget to add the <code>LTO=thin</code> flag, otherwise the build may fail if your computer&#39;s memory is less then 24Gb.</p><p>Starting from Android 13, the kernel is built by <code>bazel</code>:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">tools/bazel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--config=fast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//common:kernel_aarch64_dist</span></span>
<span class="line"></span></code></pre></div><h2 id="build-kernel-with-kernelsu" tabindex="-1">Build Kernel with KernelSU <a class="header-anchor" href="#build-kernel-with-kernelsu" aria-hidden="true">#</a></h2><p>If you can build the kernel successfully, then build KernelSU is so easy, Select any one run in Kernel source root dir:</p><ul><li>Latest tag(stable)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span></code></pre></div><ul><li>main branch(dev)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre></div><ul><li>Select tag(Such as v0.5.2)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v0.</span><span style="color:#F78C6C;">5.2</span></span>
<span class="line"></span></code></pre></div><p>And then rebuild the kernel and you will get a kernel image with KernelSU!</p>`,24),t=[o];function r(p,c,i,d,u,h){return e(),l("div",null,t)}const D=s(n,[["render",r]]);export{y as __pageData,D as default};
