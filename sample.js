/**
 * New script file
 */
/* global getAssetRegistry getParticipantRegistry */

/**
 * Assign Vendor
 * @param {org.tmforum.sla.CreateTicket} ticket - CreateTicket  transaction
 * @transaction
 */
function CreateTicket(ticketObj) { // eslint-disable-line no-unused-vars
	var factory = getFactory();
    var namespace = 'org.tmforum.sla';
    //const assetRegistry = await getAssetRegistry(namespace + '.TroubleTicket');

  	var troubleTicket = factory.newResource(namespace, 'TroubleTicket', ticketObj.incidentId);
    troubleTicket.type = ticketObj.type;
  	troubleTicket.severity = ticketObj.severity;
  	troubleTicket.description = ticketObj.description;
  	troubleTicket.status = ticketObj.status;
  	troubleTicket.creationDate = ticketObj.creationDate;
    troubleTicket.SP = ticketObj.SP;
    troubleTicket.C = ticketObj.C;
   // var temp=factory.newResource(namespace,'ServiceVendor',"NA");
   // temp.name="NA";
    troubleTicket.SV = ticketObj.SV;
    troubleTicket.note=[];
    troubleTicket.acceptanceSLA="";
    troubleTicket.closureSLA="";


  	var calcTargetAcceptedTimestamp = new Date(ticketObj.creationDate);
	calcTargetAcceptedTimestamp.setMinutes(calcTargetAcceptedTimestamp.getMinutes() + 5);

 	var calcTargetClosedTimestamp = new Date(ticketObj.creationDate);

    switch (ticketObj.severity) {
        case "P1":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

			calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 8);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;
        case "P2":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

        	calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 8);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;
        case "P3":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

        	calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 10);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;
         case "P4":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

        	calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 10);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;
         case "P5":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

        	calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 12);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;
         case "P6":
        	troubleTicket.targetAcceptedTimestamp = new Date(calcTargetAcceptedTimestamp.toISOString());

        	calcTargetClosedTimestamp.setMinutes(calcTargetClosedTimestamp.getMinutes() + 12);
        	troubleTicket.targetClosedTimestamp = new Date(calcTargetClosedTimestamp.toISOString());
            break;

    }

  	// Add the bond asset to the registry.
    return getAssetRegistry(namespace + '.TroubleTicket')
    .then(function (assetRegistry) {
      return assetRegistry.add(troubleTicket);
                   });
}

/**
 * Assign Vendor
 * @param {org.tmforum.sla.AssignVendor} ticket - the AssignVendor transaction
 * @transaction
 */
async function AssignVendor(updateTicketReq) { // eslint-disable-line no-unused-vars
	console.log('console log: ticketRequest-AssignVendor');

    const factory = getFactory();
    const namespace = 'org.tmforum.sla';
    const assetRegistry = await getAssetRegistry(namespace + '.TroubleTicket');
  	const ticket = updateTicketReq.ticket;

    if(updateTicketReq.status==="Acknowledged"){
      ticket.status = updateTicketReq.status;

      if(!ticket.note)
        ticket.note = [];

      var noteObj = factory.newConcept(namespace, 'Note');
      noteObj.date = updateTicketReq.statusChangeDate;
      noteObj.text = updateTicketReq.statusChangeReason;
      ticket.note.push(noteObj);

      ticket.acknowledgedDate = updateTicketReq.statusChangeDate;

      ticket.SV = updateTicketReq.SV;

      if(ticket.targetAcceptedTimestamp>=updateTicketReq.statusChangeDate){
      	ticket.acceptanceSLA= "SUCCESS";
      }else{
        ticket.acceptanceSLA= "FAILURE";
      }
    }else{
       throw new Error('Ticket status was expected as Acknowledged');
    }
    await assetRegistry.update(ticket);

    // emit the event
    const assignVendorEvent = factory.newEvent(namespace, 'AssignVendorEvent');
    assignVendorEvent.troubleTicket = updateTicketReq.ticket;
    emit(assignVendorEvent);
}

/**
 * Update ticket
 * @param {org.tmforum.sla.UpdateTicket} ticket - the updateTicket transaction
 * @transaction
 */
async function UpdateTicket(updateTicketReq) { // eslint-disable-line no-unused-vars
console.log('console log: ticketRequest-UpdateTicket');

    const factory = getFactory();
    const namespace = 'org.tmforum.sla';
	const ticket = updateTicketReq.ticket;
    const assetRegistry = await getAssetRegistry(namespace + '.TroubleTicket');

  	if(ticket.status==="Resolved")
    {
      	ticket.closureSLA = "";
      	ticket.resolutionDate = null;
    }

  	if(updateTicketReq.status==="In Progress"){
      ticket.status = updateTicketReq.status;

      if(!ticket.note)
        ticket.note = [];

      var noteObj = factory.newConcept(namespace, 'Note');
      noteObj.date = updateTicketReq.statusChangeDate;
      noteObj.text = updateTicketReq.statusChangeReason;
      ticket.note.push(noteObj);

    }else{
      throw new Error('Ticket status was expected as In Progress');
    }
    await assetRegistry.update(ticket);

    // emit the event
    const updateTicketEvent = factory.newEvent(namespace, 'AssignVendorEvent');
    updateTicketEvent.troubleTicket = updateTicketReq.ticket;
    emit(updateTicketEvent);

}

/**
 * Close Ticket
 * @param {org.tmforum.sla.ResolveTicket} ticket - the ResolveTicket transaction
 * @transaction
 */
async function ResolveTicket(updateTicketReq) { // eslint-disable-line no-unused-vars
console.log('console log: ticketRequest-ResolveTicket');

    const factory = getFactory();
    const namespace = 'org.tmforum.sla';
	const ticket = updateTicketReq.ticket;
    const assetRegistry = await getAssetRegistry(namespace + '.TroubleTicket');

    if(updateTicketReq.status==="Resolved"){
      ticket.status = updateTicketReq.status;

      if(!ticket.note)
        ticket.note = [];

      var noteObj = factory.newConcept(namespace, 'Note');
      noteObj.date = updateTicketReq.resolutionDate;
      noteObj.text = updateTicketReq.statusChangeReason;
      ticket.note.push(noteObj);

      ticket.resolutionDate = updateTicketReq.resolutionDate;

      if(ticket.targetClosedTimestamp>=updateTicketReq.resolutionDate){
      	ticket.closureSLA= "SUCCESS";
      }else{
        ticket.closureSLA= "FAILURE";
      }

    }else{
       throw new Error('Ticket status was expected as Closed');
    }

    await assetRegistry.update(ticket);

    // emit the event
    const resolveTicketEvent = factory.newEvent(namespace, 'ResolveTicketEvent');
    resolveTicketEvent.troubleTicket = updateTicketReq.ticket;
    emit(resolveTicketEvent);
}

/**
 * Close Ticket
 * @param {org.tmforum.sla.CloseTicket} ticket - the CloseTicket transaction
 * @transaction
 */
async function CloseTicket(updateTicketReq) { // eslint-disable-line no-unused-vars
console.log('console log: ticketRequest-CloseTicket');

    const factory = getFactory();
    const namespace = 'org.tmforum.sla';
	const ticket = updateTicketReq.ticket;
    const assetRegistry = await getAssetRegistry(namespace + '.TroubleTicket');

    if(updateTicketReq.status==="Closed"){
      ticket.status = updateTicketReq.status;

      if(!ticket.note)
        ticket.note = [];

      var noteObj = factory.newConcept(namespace, 'Note');
      noteObj.date = updateTicketReq.statusChangeDate;
      noteObj.text = updateTicketReq.statusChangeReason;
      ticket.note.push(noteObj);

    }else{
       throw new Error('Ticket status was expected as Closed');
    }

    await assetRegistry.update(ticket);

    // emit the event
    const closeTicketEvent = factory.newEvent(namespace, 'CloseTicketEvent');
    closeTicketEvent.troubleTicket = updateTicketReq.ticket;
    emit(closeTicketEvent);
}
/**
 * 
 * @param {org.tmforum.sla.SetupDemo} setupdemo - SetupDemo transaction
 * @transaction
 */
async function setupDemo(setupDemo) {  // eslint-disable-line no-unused-vars
	const factory = getFactory();
    const namespace = 'org.tmforum.sla';

    // create the Customers
    var customer1 = factory.newResource(namespace, 'Customer', 'c1');
  	customer1.name= 'customer1';
    var customer2 = factory.newResource(namespace, 'Customer', 'c2');
  	customer2.name= 'customer2';

  	const customerRegistry = await getParticipantRegistry('org.tmforum.sla.Customer');
    await customerRegistry.addAll([customer1,customer2]);
    
  
  
    // create the ServiceProviders
    var serviceprovider1 = factory.newResource(namespace, 'ServiceProvider', 'sp1');
  	serviceprovider1.name= 'serviceprovider1';
    var serviceprovider2 = factory.newResource(namespace, 'ServiceProvider', 'sp2');
  	serviceprovider2.name= 'serviceprovider2';

  	const serviceproviderRegistry = await getParticipantRegistry('org.tmforum.sla.ServiceProvider');
    await serviceproviderRegistry.addAll([serviceprovider1,serviceprovider2]);
  
    // create the ServiceVendor1
    var servicevendor1 = factory.newResource(namespace, 'ServiceVendor', 'sv1');
  	servicevendor1.name= 'servicevendor1';
    var servicevendor2 = factory.newResource(namespace, 'ServiceVendor', 'sv2');
  	servicevendor2.name= 'servicevendor2';

  	const servicevendorRegistry = await getParticipantRegistry('org.tmforum.sla.ServiceVendor');
    await servicevendorRegistry.addAll([servicevendor1,servicevendor2]);
}
