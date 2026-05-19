Migrate this Angular 17 project to Angular 18.
 
Steps:
1. Update Angular dependencies from version 17 to 18
2. Update Angular CLI to version 18 (if required)
3. Update TypeScript to Angular 18 compatible version (latest supported by Angular 18)
4. Ensure RxJS is compatible with Angular 18 (version 7.x or as required)
5. Update zone.js to a compatible version
6. Apply Angular 18 migration updates using Angular CLI
7. Review and update project configuration files (angular.json, tsconfig.json, etc.) if required
8. Replace deprecated APIs and remove unsupported usages
9. Verify compatibility of third-party libraries and update them if required
10. Fix compilation and runtime errors
11. Ensure the application builds and runs correctly
 
Commands to consider:
- ng update @angular/cli@18 @angular/core@18
- npm install
- ng build
- ng serve
 
Constraints:
- Do NOT change folder structure
- Do NOT refactor unrelated code
- Do NOT convert to standalone components unless already partially implemented
- Keep changes minimal and safe
- Preserve existing functionality
 
Output:
- List of updated files
- Commands executed (ng update, npm install, etc.)
- Summary of changes
- Any manual fixes required
- Any library compatibility issues detected
 
 