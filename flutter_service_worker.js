'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "9ce5e92feede8b449e6b4329017bed61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "01a342178828699119ea51136386f2ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10388874db9d8f87e37bbee6645cd960",
".git/logs/refs/heads/main": "0e3c3519e458fbd565e0627e4e79c3e9",
".git/logs/refs/remotes/origin/main": "760b159fc6f8776133d71f26b0802225",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/cebb380a6681d1932ffcaf4cc9443720bfebdd": "cddd4e443e243d26bbe952b8b423f133",
".git/objects/0c/d49e4129315cff8af25b3a077ab5f19811ae3c": "55f624a8369ef4eaba8afd1520a73e96",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/e22df75ab49d35f214b2fcd0e559a6286df098": "21139e75fa60aa5d25e29c3beb329ca4",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/38/45880acd19f18d6cb7c5ff3193e78e323074f9": "e705a22b31417b25f830e16ef9e09673",
".git/objects/3c/a42ce9526c4d9464b09c9b3ef911c9dbec2178": "5f5a6b5db047220e6e7a8d9642bca27f",
".git/objects/3f/76473cd77578c2a2d862f56eae38239aa8d768": "1e6f08b8539775a7274fa3ddad443c0b",
".git/objects/41/8115bc8bb46e094ad0c9e2b207a68f2219a8eb": "89603fbec981f9c1508471df0d12eee4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/15c6ae9665bf674bc20e6a0f4f9d87c901522e": "edd01961f644a1d02aa0cd977e151812",
".git/objects/57/a30d9903562a3c8d0ce34f1e30f96b34c5550b": "1e4f9cc09f3eb07c8b47ffa6a492d13a",
".git/objects/58/1c42ab1ef05446cbaf302023bb972334955b1c": "27be4c1813fd042ef6d497e1cbe47935",
".git/objects/62/5b75a3475ed3339617ffbe3667df9028e83417": "e348ab8d1bfdfa48160147eaef7b268d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/74/52c7de1d1348cb654e221bc6ebfc32ef2bbc4b": "d8854a77f80522ea4bb69441fbf12958",
".git/objects/77/49552efb33850e29be3ab262d79394ab336a47": "07a779a8e4fdd2397254a24faf595d76",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8e/1de0d7dd10e5cd678a9c973055024904aa2358": "8da8892deed2ca6607427de3885ae35d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/05771a233de05c10bd26a487aa37d03b6e14f5": "8c4d60851a08a6f998d295f1ec54e1cb",
".git/objects/a3/aae17ad16292e4b8d912f19e12380b2d8af443": "bf8580e7af21a4df6975ee11b4a7c975",
".git/objects/aa/7df6f466cf988672c38a5361cea017183e4ead": "65ecc30526a22fa13e452059a079da9f",
".git/objects/aa/85a18a4fee496ca2dbc61e4a3bdc819d492560": "046917375564f4d4d19c3d2ae1778420",
".git/objects/b3/e5444f12a4901d4cbfaaa1cae5ffb25a3f286c": "78845efff6164414c2cbc9b055a0fa04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c6/59ba9a17a65f3ce74dabcc607a5ac832e36a1f": "bd5d59b6c8c1ccf041e6ff45006140a3",
".git/objects/c7/2614410e85642a822f2508b319d3396db32558": "11d5f7b4d5277870f06e4cb479b9eebe",
".git/objects/ca/2e5ec74b1ed03b43add498e0e1bd35482707e6": "6460ef8493ac3682e507e48e8e8818ae",
".git/objects/cf/669f2c9d7f5743236e25ca7e90427f46ebe759": "9d9fdae0d5e3352f58c82cf5177dbf71",
".git/objects/d2/b59c728be699c96af2665a47239d9472894c18": "51eff86e7adae518a95cba596d43dcb3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/0d3b73f48f0f7513a44155323fb192b76b586a": "5ad28a31ee8e82c8f95ab2aca35a54b4",
".git/objects/df/59c4329e7cfd045bc50c0515ccabd5fc36df8b": "c890b97e9bc94e0c36a4753b152957d6",
".git/objects/e9/cf1637bcec68306598aed294e977b136eebb29": "d2a3f7a8065ffcd0459062b23785aad4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/c77fdc65af46c1e5d894dbe3c11db25a45cd7a": "f082478c4f6ebb329d0143325ff97999",
".git/objects/f7/f36d25f9362979feec01549bfd2fe151e9e137": "d60b8b9aac520e2eaa3d9839e47ba518",
".git/refs/heads/main": "1a0ab2fe501d157dfad6d45c45303103",
".git/refs/remotes/origin/main": "1a0ab2fe501d157dfad6d45c45303103",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a3570f43e90d3d3f9033fcf09ec9f4f0",
"assets/NOTICES": "818dd86486d888b89a3e840fe46a3754",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "e3d2f25b52a72fed284e272b089c70d4",
"canvaskit/canvaskit.js.symbols": "0135789b1e5e9340410936fbd8e1a40b",
"canvaskit/canvaskit.wasm": "01464ede27b59191d1523b4f4a85147d",
"canvaskit/chromium/canvaskit.js": "202130efa226985e3811f974788db976",
"canvaskit/chromium/canvaskit.js.symbols": "588688389375c18e67c5e16183f536cd",
"canvaskit/chromium/canvaskit.wasm": "592494a2e370af535900099d2469d4d8",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "618951e513f18b78fced50209d7b9955",
"canvaskit/skwasm.wasm": "ce8505fdfda9952b61f0bc3126c8bbff",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c14e091aab031d1c855c16f1641a45d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb4e4ad95653ccba2b07278ea9a106b9",
"/": "eb4e4ad95653ccba2b07278ea9a106b9",
"main.dart.js": "7d53622cccd1811752bc91416c2a55c7",
"manifest.json": "fe7ed367435524e2c9af5a13f8bcf188",
"version.json": "f77c1a01253494a88e5461fa3d8c830c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
