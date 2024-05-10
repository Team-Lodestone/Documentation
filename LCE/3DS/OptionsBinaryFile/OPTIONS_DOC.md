# Options:
### Values:
```
-1      : Always (force) False       *Not All Settings (Boolean)
0       : False                      *Not All Settings (Boolean)
1       : True                       *Not All Settings (Boolean)
2       : Always (force) True        *Not All Settings (Boolean)
[]      : Single List                *Includes only Integers or Character "X"
#[]     : Combo List (multiple)      *Includes only Integers or Character "X"
```
### Language String Values:
```
de_DE   : German    - Germany
en_GB   : English   - Great Britain (UK)
en_US   : English   - United States (US)
es_ES   : Spanish   - Spain
es_MX   : Spanish   - Mexico
fr_CA   : French    - Canada
fr_FR   : French    - France
it_IT   : Italian   - Italy
jp_JP   : Japanses  - Japan
ko_KR   : Korean    - Korea
nl_NL   : Dutch     - Netherlands
pt_PT   : Portugues - Portugal
pt_BR   : Portugues - Brazil
ru_RU   : Russian   - Russia
zh_CN   : Zhongwen  - China
zh_TW   : Zhongwen  - Taiwan
```
### Integer Values:
```
game_difficulty_new                     - Defualt Difficulty when Creating New World.              (Value: Int 0 - 4)
gfx_dpadscale                           - Scalability for the DPAD (input multiplied).             (Value: Int 0 - 1 *Decimal)
game_automationserverretrytime          - Retry/refresh server list time (in Milliseconds).        (Value: Int 1 - 100)  
ctrl_sensitivity                        - Camera Panning Sensitivity.                              (Value: Int 0 - 5 *Decimal)
ctrl_keyboardlayout:                    - What Keyboard Layout is being used.                      (Value: Int *Does NOT affect Game)
ctrl_gamePadMap                         - Button Mapping for the 3DS Gamepad.                      (Value: Combo List & Int
gfx_renderdistance_new                  - Simulation Distance of Game.                             (Value: Int 0 - 9)
gfx_particleviewdistance                - How far away until Particles Aren't Shown.               (Value: Int 0 - 9)
gfx_field_of_view                       - The Field of View distance of the player.                (Value: Int 0 - 120)
gfx_gamma                               - The Brightness of the Game.                              (Value: Int 0 - 5 *Decimal)
gfx_guiscale                            - Scale the UI * Int.                                      (Value: Int *Does NOT affect Game)
audio_sound                             - How loud is the SFX in-game.                             (Value: Int 0 - 2 *Decimal)
audio_music                             - How loud is the Music/OST in-game.                       (Value: Int 0 - 2 *Decimal)
dev_connection_quality                  - Force connection quality settings.                       (Value: Int 0 - 10)
dev_offersUnlocked                      - Limit Time Offers Unlocked.                              (Value: Int *Does NOT affect Game)
```
### Integer Values (Extended):
```
dev_logtimestamp                        - Log timestamps if Devmode Enabled.                       (Value: Int *Does NOT affect Game)
old_game_version_major                  - Major Version of this File (options.txt).                (Value: Int 0 - 100)
old_game_version_minor                  - Minor Version of this File (options.txt).                (Value: Int 0 - 100)
old_game_version_patch                  - Patch Version of this File (options.txt).                (Value: Int 0 - 100)
old_game_version_beta                   - Beta Version of this File (options.txt).                 (Value: Int 0 - 100)
```
### Character Strings:
```
mp_username                             - Username of player.                                      (Value: Character String)
game_language                           - What language should be displayed/used.                  (Value: Character String *Language String Above)
game_skintypefull                       - Name of Skin in use by player.                           (Value: Character String *Internal Skin Naming)
game_recentskin1                        - Sets Skin to this String if Defualt isn't found.         (Value: Character String *Internal Skin Naming)
game_recentskin2                        - Sets Skin to this String if 'recentskin1' isn't found.   (Value: Character String *Internal Skin Naming)
game_recentskin3                        - Sets Skin to this String if 'recentskin2' isn't found.   (Value: Character String *Internal Skin Naming)
dev_logtrace                            - Include what caused the log.                             (Value: Character String *Does NOT affect Game)
dev_logappend                           - Append a new Character Line for Log File.                (Value: Character String *Does NOT affect Game)
```
### Boolean (Bool):
```
game_thirdperson                        - Turn on/off thirdperson when opening a world.            (Value: Boolean)
mp_server_visible                       - Is server avaliable for people to players.               (Value: Boolean)
mp_xboxlive_visible                     - Is server available over Xbox Live.                      (Value: Boolean *Does NOT affect Game)
game_limitworldsize                     - Should Game Limit World Size.                            (Value: Bolean *Does NOT affect Game)
game_lastcustomskinnew                  - Is last skin customized/new or bought.                   (Value: Boolean)
game_haseverloggedintoxbl               - Is server logged into XBL.                               (Value: Boolean *Does NOT affect Game)
game_haschosennottosignintoxbl          - Is server chosen to not log into XBL.                    (Value: Boolean *Does NOT affect Game)
game_hasBeenShownXbLiveSignInSurvey     - Has server owner been shown Forum for XBL.               (Value: Boolean *Does NOT affect Game)
ctrl_invertmouse                        - Should Game Invert Y Axis Camera Panning.                (Value: Boolean)
ctrl_islefthanded                       - Is player lefthanded.                                    (Value: Boolean *Does NOT affect Game)
ctrl_usetouchscreen                     - Should Game use Touchscreen for Input.                   (Value: Boolean)
ctrl_usetouchjoypad:                    - Should Game display Touch Joystick/Buttons.              (Value: Boolean)
ctrl_swapjumpandsneak                   - Swaps keymapping for Jumping and Sneaking.               (Value: Boolean)
feedback_vibration                      - Should Game use Vibrations.                              (Value: Boolean *Does NOT affect Game)
ctrl_autojump                           - Is AutoJump Enabled.                                     (Value: Boolean)
```
### Boolean (Extended No. 1):
```
gfx_viewbobbing                         - Show realistic head movement.                            (Value: Boolean)
gfx_fancygraphics                       - Should game display "fancy" graphics.                    (Value: Boolean)
gfx_transparentleaves                   - Are leaves Transparent.                                  (Value: Boolean)
gfx_fancyskies                          - Should game display "fancy" skies.                       (Value: Boolean)
gfx_hidegui                             - Should game hide the in-game GUI.                        (Value: Boolean)
gfx_msaa                                - Should Game use Multi-Sampling Anti-Aliasing (MSAA).     (Value: Boolean)
gfx_texel_aa_2                          - Should Game use Texel-2 Anti-Aliasing (TAA2).            (Value: Boolean)
gfx_fullscreen                          - Should Game start in Fullscreen Mode.                    (Value: Boolean *Does NOT affect Game)
dev_autoloadlevel                       - Should game auto-load last played world.                 (Value: Boolean *Does NOT affect Game)
dev_showchunkmap                        - Should game enable debug Chunk Map.                      (Value: Boolean *Does NOT affect Game)
dev_disablefilesystem                   - Should game disable the Save-System.                     (Value: Boolean *Does NOT affect Game)
dev_enable_profiler                     - Should game enable debug Profiler.                       (Value: Boolean *Does NOT affect Game)
dev_uselocalserver                      - Should game use local server.                            (Value: Boolean *Does NOT affect Game)
dev_createRealmWithoutPurchase          - Should game allow creating of realms without purchase.   (Value: Boolean *Does NOT affect Game)
dev_flushOrphanedRealmsPurchases        - Shuld game remove created realms.                        (Value: Boolean *Does NOT affect Game)
```
### Booleans (Extended No. 2):
```
dev_resetClientId                       - Reset User ClientID.                                     (Value: Boolean)
dev_logflushimmediate                   - Remove all Devlogs if Devmode Enabled.                   (Value: Boolean *Does NOT affect Game)
dev_priorityfilter                      - Are Developer Settings Priority.                         (Value: Boolean)
dev_areafilter                          - Developer Area outputted into Log File.                  (Value: Boolean)
realms_show_friend_invites_only         - Should game accept Friend-Only invites.                  (Value: Boolean *Does NOT affect Game)
```
### Lists & Combo Lists:
```
game_flatworldlayers                    - How many layers (and ID's of blocks for flatworld).      (Value: List)
ctrl_gamePadMap                         - Button Mapping for the 3DS Gamepad.                      (Value: Combo List & Int
```