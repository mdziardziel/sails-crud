# sails-crud

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Wed May 13 2020 20:20:36 GMT+0200 (GMT+02:00) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.17.1`](https://github.com/balderdashy/sails-generate/tree/v1.17.1/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->


sails lift 
http://localhost:1337/

sudo systemctl start mongod
sudo systemctl status mongod

create
curl -X POST -d '{"title":"Babka piaskowa","description":"Zebrać piasek"}' -H "Content-Type: application/json" http://127.0.0.1:1337/api/v1/recipe

delete
curl -X DELETE -H "Content-Type: application/json" http://127.0.0.1:1337/api/v1/recipe/Babka-piaskowa-fxtewjw

update
curl -X PUT -d '{"title":"Babka piaskowa pieczona","description":"Zebrać piasek i upiec"}' -H "Content-Type: application/json" http://127.0.0.1:1337/api/v1/recipe/Babka-piaskowa-fxtewjw