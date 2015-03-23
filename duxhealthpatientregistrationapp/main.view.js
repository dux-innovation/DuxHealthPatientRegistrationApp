sap.ui
		.jsview(
				"duxhealthpatientregistrationapp.main",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf duxhealthpatientregistrationapp.main
					 */
					getControllerName : function() {
						return "duxhealthpatientregistrationapp.main";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf duxhealthpatientregistrationapp.main
					 */
					createContent : function(oController) {

						var table = new sap.m.Table(
								{
									headerText : "Pacientes",
									headerDesign : sap.m.ListHeaderDesign.Standard,
									footerText : "© DUX Innovation 2015. Todos os direitos reservados.",
									mode : sap.m.ListMode.None,
									width : "100%",
									includeItemInSelection : false,
									showUnread : false,
									noDataText : "Nenhum registro encontrado",
									showNoData : true,
									modeAnimationOn : true,
									showSeparators : sap.m.ListSeparators.All,
									swipeDirection : sap.m.SwipeDirection.Both,

									items : {
										path : "/patients",
										template : new sap.m.ColumnListItem({
											cells : [ new sap.m.Text({
												text : "{prontuario}",
											}),

											new sap.m.Text({
												text : "{name}",
											}),

											new sap.m.Text({
												text : "{idade}",
											}),

											new sap.m.Text({
												text : "{sexo}",
											}),

											]
										})
									},

									headerToolbar : new sap.m.Toolbar({
										content : [ new sap.m.Button({
											text : "Criar",
											type : sap.m.ButtonType.Default,
											icon : "sap-icon://create",
											iconFirst : true
										}), new sap.m.Button({
											text : "Alterar",
											type : sap.m.ButtonType.Default,
											icon : "sap-icon://edit",
											iconFirst : true
										}), new sap.m.Button({
											text : "Excluir",
											type : sap.m.ButtonType.Default,
											icon : "sap-icon://delete",
											iconFirst : true
										}), ],

									}),

									columns : [ new sap.m.Column({
										header : new sap.m.Text({
											text : "Prontuário",
										}),
									}),

									new sap.m.Column({
										header : new sap.m.Text({
											text : "Nome",
										}),
									}),

									new sap.m.Column({
										header : new sap.m.Text({
											text : "Idade",
										}),
									}),

									new sap.m.Column({
										header : new sap.m.Text({
											text : "Sexo",
										}),
									}) ],

								});

						return new sap.m.Page({
							title : "Registro de Pacientes",
							content : [ table ]
						});

					}

				});