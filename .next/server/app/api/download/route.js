/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/download/route";
exports.ids = ["app/api/download/route"];
exports.modules = {

/***/ "(rsc)/./app/api/download/route.ts":
/*!***********************************!*\
  !*** ./app/api/download/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst execPromise = (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)(child_process__WEBPACK_IMPORTED_MODULE_1__.exec);\nasync function POST(req) {\n    try {\n        const { url } = await req.json();\n        if (!url) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid YouTube URL'\n            }, {\n                status: 400\n            });\n        }\n        const videoFile = `/tmp/video-${Date.now()}.mp4`;\n        const command = `yt-dlp \"${url}\" -o \"${videoFile}\" --format \"best\"`;\n        console.log(`Executing: ${command}`);\n        const { stdout, stderr } = await execPromise(command);\n        console.log(`stdout: ${stdout}`);\n        console.error(`stderr: ${stderr}`);\n        if (!fs__WEBPACK_IMPORTED_MODULE_3___default().existsSync(videoFile)) {\n            throw new Error('Video file not found after download');\n        }\n        const videoBuffer = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(videoFile);\n        fs__WEBPACK_IMPORTED_MODULE_3___default().unlinkSync(videoFile);\n        const headers = new Headers({\n            'Content-Type': 'video/mp4',\n            'Content-Disposition': 'attachment; filename=\"video.mp4\"'\n        });\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(videoBuffer, {\n            headers\n        });\n    } catch (error) {\n        console.error('Error:', error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message || 'Failed to download video'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Rvd25sb2FkL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ25CO0FBQ0o7QUFDYjtBQUVwQixNQUFNSSxjQUFjRiwrQ0FBU0EsQ0FBQ0QsK0NBQUlBO0FBRTNCLGVBQWVJLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFFOUIsSUFBSSxDQUFDRCxLQUFLO1lBQ1IsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0U7UUFFQSxNQUFNQyxZQUFZLENBQUMsV0FBVyxFQUFFQyxLQUFLQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBRWhELE1BQU1DLFVBQVUsQ0FBQyxRQUFRLEVBQUVQLElBQUksTUFBTSxFQUFFSSxVQUFVLGlCQUFpQixDQUFDO1FBQ25FSSxRQUFRQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUVGLFNBQVM7UUFFbkMsTUFBTSxFQUFFRyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1kLFlBQVlVO1FBQzdDQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUVDLFFBQVE7UUFDL0JGLFFBQVFOLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRVMsUUFBUTtRQUVqQyxJQUFJLENBQUNmLG9EQUFhLENBQUNRLFlBQVk7WUFDN0IsTUFBTSxJQUFJUyxNQUFNO1FBQ2xCO1FBRUEsTUFBTUMsY0FBY2xCLHNEQUFlLENBQUNRO1FBRXBDUixvREFBYSxDQUFDUTtRQUVkLE1BQU1hLFVBQVUsSUFBSUMsUUFBUTtZQUMxQixnQkFBZ0I7WUFDaEIsdUJBQXVCO1FBQ3pCO1FBRUEsT0FBTyxJQUFJekIscURBQVlBLENBQUNxQixhQUFhO1lBQUVHO1FBQVE7SUFFakQsRUFBRSxPQUFPZixPQUFZO1FBQ25CTSxRQUFRTixLQUFLLENBQUMsVUFBVUEsTUFBTWlCLE9BQU87UUFDckMsT0FBTzFCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBT0EsTUFBTWlCLE9BQU8sSUFBSTtRQUEyQixHQUFHO1lBQUVoQixRQUFRO1FBQUk7SUFDakc7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3NyaWthbnRwYW5kZXkvRG9jdW1lbnRzL0dpdEh1Yi9wcmVhY2hlci9hcHAvYXBpL2Rvd25sb2FkL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGV4ZWNQcm9taXNlID0gcHJvbWlzaWZ5KGV4ZWMpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIFlvdVR1YmUgVVJMJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvRmlsZSA9IGAvdG1wL3ZpZGVvLSR7RGF0ZS5ub3coKX0ubXA0YDtcblxuICAgIGNvbnN0IGNvbW1hbmQgPSBgeXQtZGxwIFwiJHt1cmx9XCIgLW8gXCIke3ZpZGVvRmlsZX1cIiAtLWZvcm1hdCBcImJlc3RcImA7XG4gICAgY29uc29sZS5sb2coYEV4ZWN1dGluZzogJHtjb21tYW5kfWApO1xuXG4gICAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlY1Byb21pc2UoY29tbWFuZCk7XG4gICAgY29uc29sZS5sb2coYHN0ZG91dDogJHtzdGRvdXR9YCk7XG4gICAgY29uc29sZS5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcblxuICAgIGlmICghZnMuZXhpc3RzU3luYyh2aWRlb0ZpbGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZGVvIGZpbGUgbm90IGZvdW5kIGFmdGVyIGRvd25sb2FkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW9CdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmModmlkZW9GaWxlKTtcblxuICAgIGZzLnVubGlua1N5bmModmlkZW9GaWxlKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ3ZpZGVvL21wNCcsXG4gICAgICAnQ29udGVudC1EaXNwb3NpdGlvbic6ICdhdHRhY2htZW50OyBmaWxlbmFtZT1cInZpZGVvLm1wNFwiJyxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKHZpZGVvQnVmZmVyLCB7IGhlYWRlcnMgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZG93bmxvYWQgdmlkZW8nIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJleGVjIiwicHJvbWlzaWZ5IiwiZnMiLCJleGVjUHJvbWlzZSIsIlBPU1QiLCJyZXEiLCJ1cmwiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ2aWRlb0ZpbGUiLCJEYXRlIiwibm93IiwiY29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJzdGRvdXQiLCJzdGRlcnIiLCJleGlzdHNTeW5jIiwiRXJyb3IiLCJ2aWRlb0J1ZmZlciIsInJlYWRGaWxlU3luYyIsInVubGlua1N5bmMiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/download/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.ts&appDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.ts&appDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_srikantpandey_Documents_GitHub_preacher_app_api_download_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/download/route.ts */ \"(rsc)/./app/api/download/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/download/route\",\n        pathname: \"/api/download\",\n        filename: \"route\",\n        bundlePath: \"app/api/download/route\"\n    },\n    resolvedPagePath: \"/Users/srikantpandey/Documents/GitHub/preacher/app/api/download/route.ts\",\n    nextConfigOutput,\n    userland: _Users_srikantpandey_Documents_GitHub_preacher_app_api_download_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkb3dubG9hZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZG93bmxvYWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkb3dubG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNyaWthbnRwYW5kZXklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZwcmVhY2hlciUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzcmlrYW50cGFuZGV5JTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGcHJlYWNoZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc3Jpa2FudHBhbmRleS9Eb2N1bWVudHMvR2l0SHViL3ByZWFjaGVyL2FwcC9hcGkvZG93bmxvYWQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Rvd25sb2FkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZG93bmxvYWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Rvd25sb2FkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NyaWthbnRwYW5kZXkvRG9jdW1lbnRzL0dpdEh1Yi9wcmVhY2hlci9hcHAvYXBpL2Rvd25sb2FkL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.ts&appDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdownload%2Froute&page=%2Fapi%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdownload%2Froute.ts&appDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsrikantpandey%2FDocuments%2FGitHub%2Fpreacher&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();