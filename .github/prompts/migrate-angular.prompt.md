Migrate this Angular 19 project to Angular 20.
 
Steps:
1. Update Angular dependencies from version 19 to 20
2. Update Angular CLI to version 20 (if required)
3. Update TypeScript to a version compatible with Angular 20
4. Ensure RxJS version is compatible with Angular 20 (latest supported version)
5. Update zone.js to a compatible version (if still applicable)
6. Apply Angular 20 migration updates using Angular CLI
7. Review and update project configuration files (angular.json, tsconfig.json, etc.) if required
8. Replace deprecated APIs and remove unsupported usages
9. Verify compatibility of third-party libraries and update them if required
10. Fix compilation and runtime errors
11. Ensure the application builds and runs correctly
 
Commands to consider:
- ng update @angular/cli@20 @angular/core@20
- npm install
- ng build
- ng serve
 
Constraints:
- Do NOT change folder structure
- Do NOT refactor unrelated code
- Do NOT convert to new architecture patterns unless already partially implemented
- Keep changes minimal and safe
- Preserve existing functionality
 
Output:
- List of updated files
- Commands executed (ng update, npm install, etc.)
- Summary of changes
- Any manual fixes required
- Any library compatibility issues detected