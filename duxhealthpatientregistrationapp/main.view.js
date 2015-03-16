sap.ui.jsview("duxhealthpatientregistrationapp.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf duxhealthpatientregistrationapp.main
	*/ 
	getControllerName : function() {
		return "duxhealthpatientregistrationapp.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf duxhealthpatientregistrationapp.main
	*/ 
	createContent : function(oController) {
		
		var table = new sap.m.Table({
//			busy : false, // boolean
//			busyIndicatorDelay : 1000, // int
//			visible : true, // boolean
//			inset : false, // boolean
			headerText : "Pacientes", // string
			headerDesign : sap.m.ListHeaderDesign.Standard, // sap.m.ListHeaderDesign, since 1.14
			footerText : "© DUX Innovation 2015. Todos os direitos reservados.", // string
			mode : sap.m.ListMode.None, // sap.m.ListMode
			width : "100%", // sap.ui.core.CSSSize
			includeItemInSelection : false, // boolean
			showUnread : false, // boolean
			noDataText : "Nenhum registro encontrado", // string
			showNoData : true, // boolean
			enableBusyIndicator : true, // boolean, since 1.20.2
			modeAnimationOn : true, // boolean
			showSeparators : sap.m.ListSeparators.All, // sap.m.ListSeparators
			swipeDirection : sap.m.SwipeDirection.Both, // sap.m.SwipeDirection
//			growing : false, // boolean, since 1.16
//			growingThreshold : 20, // int, since 1.16
//			growingTriggerText : undefined, // string, since 1.16
//			growingScrollToLoad : false, // boolean, since 1.16
//			rememberSelections : true, // boolean, since 1.16.6
//			backgroundDesign : sap.m.BackgroundDesign.Translucent, // sap.m.BackgroundDesign
//			fixedLayout : true, // boolean, since 1.22
//			showOverlay : false, // boolean, since 1.22.1
//			
			
//			items : [ 
//			          new sap.m.ListItemBase({
//				busy : false, // boolean
//				busyIndicatorDelay : 1000, // int
//				visible : true, // boolean
//				type : sap.m.ListType.Inactive, // sap.m.ListType
//				visible : true, // boolean
//				unread : false, // boolean
//				selected : false, // boolean
//				counter : undefined, // int
//				tooltip : undefined, // sap.ui.core.TooltipBase
//				customData : [], // sap.ui.core.CustomData
//				dependents : [], // sap.ui.core.Control, since 1.19
//				tap : [ function(oEvent) {
//					var control = oEvent.getSource();
//				}, this ],
//				detailTap : [ function(oEvent) {
//					var control = oEvent.getSource();
//				}, this ],
//				press : [ function(oEvent) {
//					var control = oEvent.getSource();
//				}, this ],
//				detailPress : [ function(oEvent) {
//					var control = oEvent.getSource();
//				}, this ]
//			}) ], // sap.m.ListItemBase
			
			
			swipeContent : undefined, // sap.ui.core.Control
			headerToolbar : new sap.m.Toolbar({
				busy : false, // boolean
				busyIndicatorDelay : 1000, // int
				visible : true, // boolean
				visible : true, // boolean
				width : undefined, // sap.ui.core.CSSSize
				active : false, // boolean
				enabled : true, // boolean
				height : "", // sap.ui.core.CSSSize
				design : sap.m.ToolbarDesign.Auto, // sap.m.ToolbarDesign, since 1.16.8
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : [], // sap.ui.core.CustomData
				dependents : [], // sap.ui.core.Control, since 1.19
				content : [
				           new sap.m.Button({
								text : "Criar", // string
								type : sap.m.ButtonType.Default, // sap.m.ButtonType
								//width : undefined, // sap.ui.core.CSSSize
								icon : "sap-icon://create", // sap.ui.core.URI
								iconFirst : true, // boolean
								tap : [ function(oEvent) {
									var control = oEvent.getSource();
								}, this ],
								press : [ function(oEvent) {
									var control = oEvent.getSource();
								}, this ]
							}),
							
							   new sap.m.Button({
									text : "Alterar", // string
									type : sap.m.ButtonType.Default, // sap.m.ButtonType
									//width : undefined, // sap.ui.core.CSSSize
									icon : "sap-icon://edit", // sap.ui.core.URI
									iconFirst : true, // boolean
									tap : [ function(oEvent) {
										var control = oEvent.getSource();
									}, this ],
									press : [ function(oEvent) {
										var control = oEvent.getSource();
									}, this ]
								}),
								
								   new sap.m.Button({
										text : "Excluir", // string
										type : sap.m.ButtonType.Default, // sap.m.ButtonType
										//width : undefined, // sap.ui.core.CSSSize
										icon : "sap-icon://delete", // sap.ui.core.URI
										iconFirst : true, // boolean
										tap : [ function(oEvent) {
											var control = oEvent.getSource();
										}, this ],
										press : [ function(oEvent) {
											var control = oEvent.getSource();
										}, this ]
									})
									
									
				           ], // sap.ui.core.Control
				press : [ function(oEvent) {
					var control = oEvent.getSource();
				}, this ]
			}), // sap.m.Toolbar, since 1.16
			infoToolbar : undefined, // sap.m.Toolbar, since 1.16
			columns : [ 
			   new sap.m.Column({
				width : "10%", // sap.ui.core.CSSSize
				hAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
				vAlign : sap.ui.core.VerticalAlign.Inherit, // sap.ui.core.VerticalAlign
				styleClass : undefined, // string
				visible : true, // boolean
				minScreenWidth : "10px", // string
				demandPopin : false, // boolean
				popinHAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
				popinDisplay : sap.m.PopinDisplay.Block, // sap.m.PopinDisplay, since 1.13.2
				mergeDuplicates : false, // boolean, since 1.16
				mergeFunctionName : "getText", // string, since 1.16
				tooltip : undefined, // sap.ui.core.TooltipBase
				customData : [], // sap.ui.core.CustomData
				dependents : [], // sap.ui.core.Control, since 1.19
				header : undefined, // sap.ui.core.Control
				footer : undefined
			// sap.ui.core.Control
			}) ], // sap.m.Column
			
			
//			select : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ],
//			selectionChange : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ], // since 1.16
//			"delete" : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ],
//			swipe : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ],
//			growingStarted : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ], // since 1.16
//			growingFinished : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ], // since 1.16
//			updateStarted : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ], // since 1.16.3
//			updateFinished : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ], // since 1.16.3
//			itemPress : [ function(oEvent) {
//				var control = oEvent.getSource();
//			}, this ]
		// since 1.20
		});
		
		
 		return new sap.m.Page({
			title: "Registro de Pacientes",
			content: [
			          table
			]
		});
 		
	}


});