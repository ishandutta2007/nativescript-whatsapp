"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
//router
var router_1 = require("./shared/router");
var router_2 = require("nativescript-angular/router");
//components
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var create_user_component_1 = require("./login/create.user.component");
var listado_component_1 = require("./chats/listado.component");
var chat_component_1 = require("./chat/chat.component");
var firebase = require("nativescript-plugin-firebase");
var admob = require("nativescript-admob");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            create_user_component_1.CreateUserComponent,
            listado_component_1.ChatListadoComponent,
            chat_component_1.ChatComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_2.NativeScriptRouterModule,
            router_2.NativeScriptRouterModule.forRoot(router_1.router)
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUVyRSxRQUFRO0FBQ1IsMENBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSxZQUFZO0FBQ1osaURBQStDO0FBQy9DLDJEQUF5RDtBQUN6RCx1RUFBb0U7QUFDcEUsK0RBQWlFO0FBQ2pFLHdEQUFzRDtBQUd0RCx1REFBMEQ7QUFLMUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFHMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdiLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQyxRQUFRO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUs7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBbUJGLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ04sNEJBQVk7WUFDWixnQ0FBYztZQUNkLDJDQUFtQjtZQUNuQix3Q0FBb0I7WUFDcEIsOEJBQWE7U0FDaEI7UUFDTCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNELDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUM7U0FDdkM7UUFDVCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vcm91dGVyXG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3NoYXJlZC9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuLy9jb21wb25lbnRzXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vY3JlYXRlLnVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXRMaXN0YWRvQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0cy9saXN0YWRvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcblxuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCBjYW1lcmFNb2R1bGUgPSByZXF1aXJlKFwiY2FtZXJhXCIpO1xuXG5pbXBvcnQgZ2VvbG9jYXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpO1xuXG52YXIgYWRtb2IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFkbW9iXCIpO1xuXG5cbmZpcmViYXNlLmluaXQoe1xuICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG59KS50aGVuKFxuICAoaW5zdGFuY2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgfVxuKTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgQ3JlYXRlVXNlckNvbXBvbmVudCxcbiAgICAgICAgICAgIENoYXRMaXN0YWRvQ29tcG9uZW50LFxuICAgICAgICAgICAgQ2hhdENvbXBvbmVudFxuICAgICAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXIpXG4gICAgICAgICAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=