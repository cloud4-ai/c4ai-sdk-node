// import { C4AI_RequestParameter } from "@c4ai-sdk/global/request/C4AIRequestParameter.class";
// import { C4AI_RequestParameters } from "@c4ai-sdk/global/request/C4AIRequestParameters.class";
// import { C4AI_AAC } from "@c4ai-sdk/services/aac/AAC.class";
// import { C4AI_CSS } from "@c4ai-sdk/services/css/CSS.class";
// import { C4AI_EES } from "@c4ai-sdk/services/ees/EES.class";
// import { C4AI_PLPrompt } from "@c4ai-sdk/services/pl/PLPrompt.class";


// (async () => {
//     const eesSic = 'sic@0000000000:ees:0000000000'

//     const ees = await new C4AI_EES(eesSic).load();

//     const request = {
//         executor: 'sic@0000000000:ees:0000000000'
//     };



//     const response = await ees.executeRaw({
//         executor: {
//             // your AI API Executor ID from C4AI Cloud Console
//             sic: '@yourorg/openai-gpt'
//         },
//         parameters: {
//             // actual remote params comes from AAC Definition
//             // You can check a set of parameters in playground or in AAC overview

//             user_input: new C4AI_PLPrompt.commands.getValue(
//                 'sic@0000000000:pl-prompt:0000000000',
//                 new C4AI_RequestParameters()
//             )
          

//             system_input: new C4AI_ServiceCommand(
//                 C4AI_ServiceCommandType.QUERY,
//                 new C4AI_PLPrompt('sic@0000000000:kdb:0000000000')
//             )
//                 .query('SELECT * FROM table WITH PREFIX')
//                 ,
//             foo: 'bar',
//             model: 'gpt4'
//         },
//         options: {
//             callback: [
//                 new C4AI_ServiceCommand(
//                     C4AI_ServiceCommandType.GET_VALUE,
//                     new C4AI_PLPrompt('sic@0000000000:pl-prompt:0000000000')
//                 ),
//                 new C4AI_ServiceCommand(
//                     C4AI_ServiceCommandType.EXECUTE,
//                     new C4AI_PLPrompt('sic@0000000000:api-schema:0000000000')
//                 ),
//             ],

//         },
//         credentials: {
//             // Credentials for AAC.  
//             // You can check a set of credentials in playground or in AAC overview
//             OPEN_AI_KEY: "YOUR_API_KEY"
//         },













//         _bindings: {

//         }
//     }, {
//         ignoreValidation: true
//     });



//     const promptSic = 'sic@0000000000:ees:0000000000'
//     const aacSic = 'sic@0000000000:ees:0000000000'

//     // Init Prompt and load it with required parameters
//     // Load can be ignored, in this case all parameters should be passed manually
//     const prompt = await new C4AI_PLPrompt(promptSic).load();

//     prompt.parameters.set('fooo', 'bar');
//     prompt.parameters.set('test', 'test');

//     const ParamsMapper = {
//         fooo: 'var',
//         test: 'test'
//     }

//     for (const param of prompt.parameters) {
//         param.value = ParamsMapper[param.name];
//     }

//     // Init AAC and Load It

//     const executor = await new C4AI_AAC(aacSic).load();


//     const parameters = new C4AI_RequestParameters()
//         .add(
//             new C4AI_RequestParameter('foo', 'bar'),
//             new C4AI_RequestParameter('foo', 'bar'),
//             new C4AI_RequestParameter('foo', prompt),
//             new C4AI_RequestParameter('foo', 'bar', {
//                 type: 'string'
//             })
//         );

//     /**
//      * Credentials for CSS. No Load method because it's a local CSS instance
//      */
//     const credentials = new C4AI_CSS({ rotationStrategy: 'round_robin' });

//     credentials.records.add(
//         new C4AI_RequestParameter('foo', 'bar'),
//         new C4AI_RequestParameter('foo', 'bar'),
//     );


//     const response2 = await ees.execute(
//         executor,
//         parameters,
//         [
//             credentials
//         ],
//         {
//             ignoreValidation: true
//         });

//     class C4AI_ServiceCommand {

//         constructor(

//             private commandConstructor:{
//                 name:'GET_KDB_VALUE',
//                 query?:string,
//             } | 
//             {
//                 name:'GET_PROMPT_VALUE',
//                 parameters?:any

//             } |
            
//             {
//                 name:'GET_CSS_VALUE',
//                 parameters?:any

//             }

//         ) { }

//     }

//     enum C4AI_ServiceCommandType {
//         GET_VALUE = 'GET_VALUE',
//         SET_VALUE = 'SET_VALUE',
//         EXECUTE = 'EXECUTE'
//     }



//     const response4 = await ees.executes({
//         executor: new C4AI_AAC('sic@0000000000:ees:0000000000'),
//         parameters: {
//             // AAC parameters

//             prompt2: new C4AI_ServiceCommand(
//                 C4AI_ServiceCommandType.GET_VALUE,
//                 new C4AI_PLPrompt('sic@0000000000:pl-prompt:0000000000')
//             ),
//             model: 'gpt4'
//         },
//         credentials: {
//             // Credentials for AAC.  
//             // You can check a set of credentials in playground or in AAC overview
//             OPEN_AI_KEY: "YOUR_API_KEY"
//         },
//     });


// })()
