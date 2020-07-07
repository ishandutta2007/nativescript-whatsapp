"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var firebase = require("nativescript-plugin-firebase");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var geolocation = require("nativescript-geolocation");
var admob = require("nativescript-admob");
var LoginComponent = (function () {
    function LoginComponent(routerExt) {
        this.routerExt = routerExt;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createMiniBanner();
        // chequeo si la persona esta logueada!
        firebase.getCurrentUser().then(function (user) {
            /*this.routerExt.navigate(["/chatListado"],{
                transition:{
                    name: "flip",
                    duration:500,
                    curve:"linear"
                }
            });*/
        }, function (error) {
            //TNSFancyAlert.showSuccess('Login!', error, 'Entrar!');
        });
    };
    LoginComponent.prototype.createMiniBanner = function () {
        admob.createBanner({
            // if this 'view' property is not set, the banner is overlayed on the current top most view
            // view: ..,
            testing: true,
            size: admob.AD_SIZE.SMART_BANNER,
            iosBannerId: "ca-app-pub-XXXXXX/YYYYYY",
            androidBannerId: "ca-app-pub-AAAAAAAA/BBBBBBB",
            // Android automatically adds the connected device as test device with testing:true, iOS does not
            iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
            margins: {
                // if both are set, top wins
                //top: 10
                bottom: 50
            }
        }).then(function () {
            console.log("admob createBanner done");
        }, function (error) {
            console.log("admob createBanner error: " + error);
        });
    };
    LoginComponent.prototype.hideBanner = function () {
        // the .then(.. bit is optional btw
        admob.hideBanner().then(function () {
            console.log("admob hideBanner done");
        }, function (error) {
            console.log("admob hideBanner error: " + error);
        });
    };
    LoginComponent.prototype.createInterstitial = function () {
        admob.createInterstitial({
            testing: true,
            iosInterstitialId: "ca-app-pub-XXXXXX/YYYYY2",
            androidInterstitialId: "ca-app-pub-AAAAAAAA/BBBBBB2",
            // Android automatically adds the connected device as test device with testing:true, iOS does not
            iosTestDeviceIds: ["ce97330130c9047ce0d4430d37d713b2"]
        }).then(function () {
            console.log("admob createInterstitial done");
        }, function (error) {
            console.log("admob createInterstitial error: " + error);
        });
    };
    ;
    LoginComponent.prototype.enableLocationTap = function () {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
            this.prenderCoordenadas(1);
        }
    };
    LoginComponent.prototype.prenderCoordenadas = function (minutos) {
        geolocation.watchLocation(function (loc) {
            if (loc) {
                console.dir("Latitud: " + loc.latitude);
                console.dir("Longitud: " + loc.longitude);
                console.dir("Speed: " + loc.speed);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        }, { desiredAccuracy: 3, updateDistance: 10, minimumUpdateTime: 1000 * (minutos * 60) }); // Should update every 20 seconds according to Googe documentation. Not verified.
    };
    LoginComponent.prototype.takePicture = function () {
        cameraModule.takePicture().then(function (picture) {
            console.log("Result is an image source instance");
            var image = new imageModule.Image();
            image.imageSource = picture;
            console.dir(image.imageSource);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.password
        }).then(function (result) {
            nativescript_fancyalert_1.TNSFancyAlert.showSuccess('Login!', 'Bienvenido de nuevo', 'Entrar!');
            _this.routerExt.navigate(["/chatListado"], {
                transition: {
                    name: "flip",
                    duration: 500,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            nativescript_fancyalert_1.TNSFancyAlert.showError('Error!', 'Wow, ocurrio un error.', 'retry');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'login/login.component.html',
        styleUrls: ['login/login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUUvRCxtRUFBNkU7QUFFN0UsdURBQTBEO0FBRTFELHFDQUF3QztBQUN4QyxzQ0FBeUM7QUFFekMsc0RBQXlEO0FBR3pELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBTzFDLElBQWEsY0FBYztJQUt2Qix3QkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELGlDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4Qix1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDMUIsVUFBQyxJQUFJO1lBQ0Q7Ozs7OztpQkFNSztRQUNULENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRix3REFBd0Q7UUFDNUQsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNmLDJGQUEyRjtZQUMzRixZQUFZO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsZUFBZSxFQUFFLDZCQUE2QjtZQUM5QyxpR0FBaUc7WUFDakcsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztZQUMzRCxPQUFPLEVBQUU7Z0JBQ0wsNEJBQTRCO2dCQUM1QixTQUFTO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBQ2I7U0FDQSxDQUFDLENBQUMsSUFBSSxDQUNIO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMs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Q0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO1lBQ0gsdUNBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUM7Z0JBQ3JDLFVBQVUsRUFBQztvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUMsR0FBRztvQkFDWixLQUFLLEVBQUMsUUFBUTtpQkFDakI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0QsVUFBQyxZQUFZO1lBQ1QsdUNBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQS9JRCxJQStJQztBQS9JWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsT0FBTztRQUNoQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQzNDLENBQUM7cUNBTWlDLHlCQUFnQjtHQUx0QyxjQUFjLENBK0kxQjtBQS9JWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3lhbGVydCc7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XG5pbXBvcnQgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvaW1hZ2VcIik7XG5cbmltcG9ydCBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7XG5cblxudmFyIGFkbW9iID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hZG1vYlwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J2xvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50e1xuXG4gICAgZW1haWw6c3RyaW5nO1xuICAgIHBhc3N3b3JkOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zICl7fVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgICB0aGlzLmNyZWF0ZU1pbmlCYW5uZXIoKTtcblxuICAgICAgICAvLyBjaGVxdWVvIHNpIGxhIHBlcnNvbmEgZXN0YSBsb2d1ZWFkYSFcbiAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKFxuICAgICAgICAgICAgKHVzZXIpPT57XG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvY2hhdExpc3RhZG9cIl0se1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246NTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpPT57XG4gICAgICAgICAgICAgICAgLy9UTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKCdMb2dpbiEnLCBlcnJvciwgJ0VudHJhciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVNaW5pQmFubmVyKCl7XG4gICAgICAgIGFkbW9iLmNyZWF0ZUJhbm5lcih7XG4gICAgICAgICAgICAvLyBpZiB0aGlzICd2aWV3JyBwcm9wZXJ0eSBpcyBub3Qgc2V0LCB0aGUgYmFubmVyIGlzIG92ZXJsYXllZCBvbiB0aGUgY3VycmVudCB0b3AgbW9zdCB2aWV3XG4gICAgICAgICAgICAvLyB2aWV3OiAuLixcbiAgICAgICAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHNldCB0byBmYWxzZSB0byBnZXQgcmVhbCBiYW5uZXJzXG4gICAgICAgICAgICBzaXplOiBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUiwgLy8gYW55dGhpbmcgaW4gYWRtb2IuQURfU0laRSwgbGlrZSBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUlxuICAgICAgICAgICAgaW9zQmFubmVySWQ6IFwiY2EtYXBwLXB1Yi1YWFhYWFgvWVlZWVlZXCIsIC8vIGFkZCB5b3VyIG93blxuICAgICAgICAgICAgYW5kcm9pZEJhbm5lcklkOiBcImNhLWFwcC1wdWItQUFBQUFBQUEvQkJCQkJCQlwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgICAgIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcInlvdXJUZXN0RGV2aWNlVURJRHNcIiwgXCJjYW5CZUFkZGVkSGVyZVwiXSxcbiAgICAgICAgICAgIG1hcmdpbnM6IHtcbiAgICAgICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBzZXQsIHRvcCB3aW5zXG4gICAgICAgICAgICAgICAgLy90b3A6IDEwXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBkb25lXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGNyZWF0ZUJhbm5lciBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgaGlkZUJhbm5lcigpe1xuICAgICAgICAvLyB0aGUgLnRoZW4oLi4gYml0IGlzIG9wdGlvbmFsIGJ0d1xuICAgICAgICBhZG1vYi5oaWRlQmFubmVyKCkudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkbW9iIGhpZGVCYW5uZXIgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZG1vYiBoaWRlQmFubmVyIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY3JlYXRlSW50ZXJzdGl0aWFsKCl7XG4gICAgICAgIGFkbW9iLmNyZWF0ZUludGVyc3RpdGlhbCh7XG4gICAgICAgICAgICB0ZXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgaW9zSW50ZXJzdGl0aWFsSWQ6IFwiY2EtYXBwLXB1Yi1YWFhYWFgvWVlZWVkyXCIsIC8vIGFkZCB5b3VyIG93blxuICAgICAgICAgICAgYW5kcm9pZEludGVyc3RpdGlhbElkOiBcImNhLWFwcC1wdWItQUFBQUFBQUEvQkJCQkJCMlwiLCAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgICAgIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFtcImNlOTczMzAxMzBjOTA0N2NlMGQ0NDMwZDM3ZDcxM2IyXCJdXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlSW50ZXJzdGl0aWFsIGRvbmVcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlSW50ZXJzdGl0aWFsIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9O1xuXG5cbiAgICBlbmFibGVMb2NhdGlvblRhcCgpIHsgXG4gICAgICAgIGlmICghZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmVuZGVyQ29vcmRlbmFkYXMoMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJlbmRlckNvb3JkZW5hZGFzKG1pbnV0b3M6bnVtYmVyKXtcbiAgICAgICAgZ2VvbG9jYXRpb24ud2F0Y2hMb2NhdGlvbihcbiAgICAgICAgKGxvYyk9PntcbiAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihcIkxhdGl0dWQ6IFwiICsgbG9jLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihcIkxvbmdpdHVkOiBcIiArIGxvYy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKFwiU3BlZWQ6IFwiICsgbG9jLnNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICB9LCBcbiAgICAgICAge2Rlc2lyZWRBY2N1cmFjeTogMywgdXBkYXRlRGlzdGFuY2U6IDEwLCBtaW5pbXVtVXBkYXRlVGltZSA6IDEwMDAgKiAobWludXRvcyAqIDYwKX0pOyAvLyBTaG91bGQgdXBkYXRlIGV2ZXJ5IDIwIHNlY29uZHMgYWNjb3JkaW5nIHRvIEdvb2dlIGRvY3VtZW50YXRpb24uIE5vdCB2ZXJpZmllZC5cbiAgICB9XG5cblxuXG4gICAgdGFrZVBpY3R1cmUoKXtcbiAgICAgICAgY2FtZXJhTW9kdWxlLnRha2VQaWN0dXJlKCkudGhlbihcbiAgICAgICAgICAgIHBpY3R1cmUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2Ugc291cmNlIGluc3RhbmNlXCIpO1xuICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IGltYWdlTW9kdWxlLkltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5pbWFnZVNvdXJjZSA9IHBpY3R1cmU7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihpbWFnZS5pbWFnZVNvdXJjZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBsb2dpbigpe1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ0xvZ2luIScsICdCaWVudmVuaWRvIGRlIG51ZXZvJywgJ0VudHJhciEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvY2hhdExpc3RhZG9cIl0se1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246NTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yTWVzc2FnZSk9PntcbiAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignRXJyb3IhJywgJ1dvdywgb2N1cnJpbyB1biBlcnJvci4nLCAncmV0cnknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn0iXX0=