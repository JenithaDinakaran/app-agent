Migrate this Angular 20 project to Angular 21.
 
Steps:
1. Update Angular dependencies from version 20 to 21
2. Update Angular CLI to version 21 (if required)
3. Update TypeScript to a version compatible with Angular 21
4. Ensure RxJS version is compatible with Angular 21 (latest supported version)
5. Verify if zone.js is still required and update it to a compatible version if applicable
6. Apply Angular 21 migration updates using Angular CLI
7. Review and update project configuration files (angular.json, tsconfig.json, etc.) if required
8. Replace deprecated APIs and remove unsupported usages
9. Verify compatibility of third-party libraries and update them if required
10. Fix compilation and runtime errors
11. Ensure the application builds and runs correctly
 
Commands to consider:
- ng update @angular/cli@21 @angular/core@21
- npm install
- ng build
- ng serve
 
Constraints:
- Do NOT change folder structure
- Do NOT refactor unrelated code
- Do NOT migrate to new architecture patterns unless already partially implemented
- Keep changes minimal and safe
- Preserve existing functionality
 
Output:
- List of updated files
- Commands executed (ng update, npm install, etc.)
- Summary of changes
- Any manual fixes required
- Any library compatibility issues detected