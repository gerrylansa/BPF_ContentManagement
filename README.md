# Portalize Setup for this release

**If you are setting up the portal for the first time, it is recommended you use a VL IDE setup use with a VCS system. Also do the following**

- Set the VCS product option for the VL IDE to Git.
- Enable the Git optons to Automatically save new objects to version control.
- Create a new partition with the following recommended settings
	
	- Name - BPF
	- Description - LANSA Portal Framework
	- Default table schema/module library - BPFDTA

- Ensure the new partition has the following required settings

	- RDMLX is enabled and all data types are enabled
	- The partition has at least one language created. It is recommend to use ENG.
	- The partition is initialised with at least the Mandatory option selected

- *The website for the VL IDE needs to be configured to run HTTPs before the portal framework can be executed.*

**Once you have an environment setup, please do the following steps...**

1. Downloaded the latest project release from gitlab. As you are reading this, I say you have done this step already.

2. Closed the VL IDE that you will be loading the portal framework into.

3. Copy the project folder from the zip file into the VCS working folder for the partition you will be loading the portal framework into.

4. Open the setup folder inside teh project folder that was copied into the VCS working folder.

5. Copy BPFSETUP.DLL into the execute folder of the partition you will be loading the portal framework.

6. Open the VL IDE program group, and then open the execute applications folder. Then double click on “Execute Form” and enter the following setting before clicking OK

	- Form Name = BPFSETUP
	- Partition Identifier = Your partition (such as BPF)
	- Render Type = X

7. The first screen is just the welcome screen, so click “Next”.

8. Step 1 is to set the path to the project folder you loaded into th VCS working folder. The initial path is the VCS working folder for the partition. If this isn’t the complete (or correct path) click the ellipses and select the path. Once correct click “Next”.

9. Step 2 is to set the database schema name for the portal tables. The default value is the partition default schema, so you can accept this or vary it to whatever you want. Click “Next” to confirm.

10. Step 3 is the final step to set the windows username and password for the background clean up task to run under. Enter your information, then click “Next” to start the setup.

11. Once the setup is complete you can execute the portal via https://<host>:<port>/<system>/<partition>/bpfportal.html and sign in using the default admin account is greg.sippel@lansa.com.au/gmh05k

12. Once signed in, go to Administration, System settings, System Role. Enter your email address as the override address for development. Click Save.

13. Go to Administration, System settings, Web Paths. Enter the paths to match those required to execute your portal. Click Save.

14. Go to Administration, Email Settings, SMTP Settings. Specify your server details you wish to use. It is recommended for development/demos to use the Google SMTP server for your G suite account. 

Any issues contact Greg Sippel.

**End of Setup notes for this release**

## The Base Portal Framework (BPF) or Portalize as it has become known is an application framework and development methodology geared to the rapid development of end-user portals. It's a ready to use portal that just requires that functionality you want to be developed.  This version features out of the box

- Execution in multiple languages

- The ability to create/remove portal languages

- User manintence of the translated text used in the portal

- Secured Login and session management

- Full Google Analytics integration

- Flexible navigation model that supports the use of browser back keys

- Responsive Design supporting display from 320px tp 4K

- Active memory management for UI and data objects

- Supports windows reloading and executing in multiple tabs

- Ability to broadcast message to all windows running and authenicated session

- Client tab management to terminated user session if no longer required

- User-driven account management including

	- Account creation
	- Password Reset
	- Account and profile update
	- Session event tracking
	- Account removal


- Administration module covering

	- User accounts – Session events, disable, reset and other actions
	- Email control and content management	
	- SMTP configuration
	- Google Analytics configuration
	- Basic security settings
	- Display of diagnostic logging
	- System setting supporting the transfer of setting between portals and portal role (Dev, Test & Prod)


- Developer libraries

	- To track session events
	- Create diagnostic logs
	- Send SMTP emails
	- Secure Passwords
	- To access extended browser features
	- Provide access to all Google Analytics event types


- Enhanced security

	- To prevent external use of APIs
	- Ensure all data calls are made by authenicated users
	- IP can be blocked automatically as desired.